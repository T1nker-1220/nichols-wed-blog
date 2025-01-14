"use client";

import { Icon } from "@/components/ui/icon";
import { AlertCircle, Book, Mail, Send, User } from "lucide-react";
import { useRef, useState } from "react";
import { z } from "zod";

const guestbookSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  message: z.string().min(1, "Message is required").max(500),
  email: z.string().email("Invalid email").optional(),
});

export function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      message: formData.get("message") as string,
      email: formData.get("email") as string,
    };

    try {
      const validatedData = guestbookSchema.parse(data);

      // Add timeout for the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid response from server");
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit entry");
      }

      if (response.status === 201 && result) {
        // Store entry in localStorage before showing success
        try {
          const userEntries = JSON.parse(
            localStorage.getItem("userEntries") || "[]"
          );
          userEntries.push(result.id);
          localStorage.setItem("userEntries", JSON.stringify(userEntries));

          setError(null);
          setSuccess(true);
          formRef.current?.reset();

          // Trigger a manual refresh of entries
          window.dispatchEvent(new CustomEvent('guestbookEntryAdded'));
        } catch (storageError) {
          console.error("Failed to save to localStorage:", storageError);
          // Continue with success state even if localStorage fails
          setError(null);
          setSuccess(true);
          formRef.current?.reset();
        }
      } else {
        throw new Error("Failed to submit entry");
      }
    } catch (err) {
      setSuccess(false);
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (err instanceof Error) {
        if (err.name === 'AbortError') {
          setError("Request timed out. Your message may have been sent - please check the messages below.");
        } else {
          setError(err.message);
        }
      } else {
        setError("Failed to submit entry. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#8B4513]"
          >
            <span className="flex items-center gap-2">
              <Icon icon={User} size={18} className="text-[#8B4513]" />
              Name <span className="text-[#8B4513]">*</span>
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border-2 border-[#CD853F]/20 bg-white px-4 py-2 text-[#8B4513] shadow-sm outline-none transition-colors placeholder:text-[#8B4513]/50 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#8B4513]"
          >
            <span className="flex items-center gap-2">
              <Icon icon={Mail} size={18} className="text-[#8B4513]" />
              Email (optional)
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-lg border-2 border-[#CD853F]/20 bg-white px-4 py-2 text-[#8B4513] shadow-sm outline-none transition-colors placeholder:text-[#8B4513]/50 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#8B4513]"
          >
            <span className="flex items-center gap-2">
              <Icon icon={Book} size={18} className="text-[#8B4513]" />
              Message <span className="text-[#8B4513]">*</span>
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-lg border-2 border-[#CD853F]/20 bg-white px-4 py-2 text-[#8B4513] shadow-sm outline-none transition-colors placeholder:text-[#8B4513]/50 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
            placeholder="Share your wishes and messages..."
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
          <Icon icon={AlertCircle} size={18} className="text-red-600" />
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 rounded-lg bg-[#FDF1E7] p-4 text-sm text-[#8B4513]">
          <Icon icon={AlertCircle} size={18} className="text-[#8B4513]" />
          Thank you for your message!
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] px-4 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-[#8B4513]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Icon icon={Send} size={18} className="text-white" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
        <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-[length:200%_100%]" />
      </button>
    </form>
  );
}
