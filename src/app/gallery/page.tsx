import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Jamaica & Morgan",
  description:
    "Browse through our cherished wedding moments, organized by category.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#FDF8F4] to-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[300px] w-full bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-5xl text-transparent md:text-6xl lg:text-7xl">
            Our Wedding Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#8B4513]/80">
            Browse through our cherished moments, organized by category
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-10" />
        <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <GalleryGrid />
      </section>
    </main>
  );
}
