"use client";

import { Icon } from "@/components/ui/icon";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";

interface GuestbookEntry {
  id: string;
  name: string;
  email?: string;
  message: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 5;

export function GuestbookEntries() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEntry, setEditingEntry] = useState<string | null>(null);
  const [editMessage, setEditMessage] = useState("");

  // Get user's entries from localStorage
  const getUserEntries = () => {
    const stored = localStorage.getItem("userEntries");
    return stored ? JSON.parse(stored) : [];
  };

  // Check if entry belongs to current user
  const isUserEntry = (entryId: string) => {
    const userEntries = getUserEntries();
    return userEntries.includes(entryId);
  };

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch("/api/guestbook", {
          signal: controller.signal,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error("Failed to fetch entries");
        }

        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          throw new Error("Invalid response from server");
        }

        setEntries(data);
        setError(null); // Clear any existing errors on successful fetch
      } catch (err) {
        // Don't show error for aborted requests (component unmounted)
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err instanceof Error ? err.message : "Failed to load entries");
        }
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchEntries();

    // Set up polling with error backoff
    let pollInterval = 5000; // Start with 5 seconds
    const maxInterval = 30000; // Max 30 seconds

    const interval = setInterval(() => {
      fetchEntries().catch(() => {
        // Increase polling interval on error, up to maxInterval
        pollInterval = Math.min(pollInterval * 1.5, maxInterval);
      });
    }, pollInterval);

    // Listen for new entries
    const handleNewEntry = () => {
      fetchEntries();
    };
    window.addEventListener('guestbookEntryAdded', handleNewEntry);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('guestbookEntryAdded', handleNewEntry);
    };
  }, []);

  const handleDelete = async (id: string) => {
    if (!isUserEntry(id)) return;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`/api/guestbook?id=${id}`, {
        method: "DELETE",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let error;
      try {
        const data = await response.text();
        error = JSON.parse(data);
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(error.error || "Failed to delete message");
      }

      // Update UI and localStorage
      setEntries(entries.filter((entry) => entry.id !== id));
      const userEntries = getUserEntries().filter(
        (entryId: string) => entryId !== id
      );
      localStorage.setItem("userEntries", JSON.stringify(userEntries));
      setError(null); // Clear any existing errors
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        setError("Request timed out. Please try again.");
      } else {
        setError(err instanceof Error ? err.message : "Failed to delete message");
      }
    }
  };

  const handleEdit = async (id: string) => {
    if (!isUserEntry(id)) return;

    if (editingEntry === id) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(`/api/guestbook?id=${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: editMessage }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        let parsedData;
        try {
          const data = await response.text();
          parsedData = JSON.parse(data);
        } catch {
          throw new Error("Invalid server response");
        }

        if (!response.ok) {
          throw new Error(parsedData.error || "Failed to update message");
        }

        // Update UI
        setEntries(
          entries.map((entry) =>
            entry.id === id ? { ...entry, message: editMessage } : entry
          )
        );
        setEditingEntry(null);
        setEditMessage("");
        setError(null); // Clear any existing errors
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          setError("Request timed out. Please try again.");
        } else {
          setError(err instanceof Error ? err.message : "Failed to update message");
        }
      }
    } else {
      const entry = entries.find((e) => e.id === id);
      if (entry) {
        setEditingEntry(id);
        setEditMessage(entry.message);
      }
    }
  };

  // Pagination calculations
  const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEntries = entries.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B4513] border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
        <Icon icon={AlertCircle} size={18} />
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {currentEntries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-elegant text-lg text-[#8B4513]">
                {entry.name}
              </h3>
              {isUserEntry(entry.id) && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(entry.id)}
                    className="rounded-full p-2 text-[#8B4513] transition-colors hover:bg-[#8B4513]/10"
                    aria-label={editingEntry === entry.id ? "Save" : "Edit"}
                  >
                    <Icon icon={Edit2} size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="rounded-full p-2 text-[#8B4513] transition-colors hover:bg-[#8B4513]/10"
                    aria-label="Delete"
                  >
                    <Icon icon={Trash2} size={16} />
                  </button>
                </div>
              )}
            </div>
            {editingEntry === entry.id ? (
              <div>
                <label htmlFor={`edit-message-${entry.id}`} className="sr-only">
                  Edit message
                </label>
                <textarea
                  id={`edit-message-${entry.id}`}
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-2 border-[#CD853F]/20 bg-white px-4 py-2 text-[#8B4513] shadow-sm outline-none transition-colors placeholder:text-[#8B4513]/50 focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                  rows={3}
                  placeholder="Edit your message..."
                />
              </div>
            ) : (
              <p className="text-[#8B4513]/80">{entry.message}</p>
            )}
            <p className="mt-2 text-sm text-[#8B4513]/60">
              {new Date(entry.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-full p-2 text-[#8B4513] transition-colors hover:bg-[#8B4513]/10 disabled:opacity-50"
            aria-label="Previous page"
          >
            <Icon icon={ChevronLeft} size={20} />
          </button>
          <span className="text-sm text-[#8B4513]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full p-2 text-[#8B4513] transition-colors hover:bg-[#8B4513]/10 disabled:opacity-50"
            aria-label="Next page"
          >
            <Icon icon={ChevronRight} size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
