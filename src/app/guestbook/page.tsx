import { GuestbookEntries } from "@/components/guestbook/guestbook-entries";
import { GuestbookForm } from "@/components/guestbook/guestbook-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Jamaica & Morgan",
  description:
    "Leave your wishes and messages for Jamaica and Morgan on their special day.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function GuestbookPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FDF8F4] to-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] w-full bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-5xl text-transparent md:text-6xl lg:text-7xl">
            Our Guestbook
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#8B4513]/80">
            Share your wishes and messages as we celebrate our special day
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10" />
        <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Guestbook Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-12">
          {/* Form Section */}
          <div className="rounded-2xl bg-gradient-to-br from-[#FDF1E7] to-white p-6 shadow-lg shadow-[#8B4513]/5">
            <h2 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-2xl font-semibold text-transparent">
              Leave a Message
            </h2>
            <p className="mt-2 text-[#8B4513]/80">
              Your message will be cherished as part of our wedding memories
            </p>
            <div className="mt-6">
              <GuestbookForm />
            </div>
          </div>

          {/* Messages Section */}
          <div className="space-y-6">
            <h2 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text text-2xl font-semibold text-transparent">
              Messages & Wishes
            </h2>
            <GuestbookEntries />
          </div>
        </div>
      </section>
    </main>
  );
}
