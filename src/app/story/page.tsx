import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Coming Soon",
  description: "Our love story is coming soon - stay tuned!",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FDF8F4] to-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-5xl text-transparent md:text-6xl lg:text-7xl">
          Our Story
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#8B4513]/80">
          A beautiful journey of love and memories is being crafted...
        </p>
        <div className="mt-8 text-2xl font-script text-[#A0522D]">Coming Soon</div>
        <div className="mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#8B4513]/30 to-transparent" />
      </div>
      {/* Decorative Elements */}
      <div className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-10" />
    </main>
  );
}
