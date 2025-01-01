"use client";

import { MemoryGrid } from "@/components/memories/memory-grid";
import { motion } from "framer-motion";

export function MemoriesContent() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#FDF8F4] to-white">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute -left-12 top-1/4 h-24 w-24 rounded-full bg-[#8B4513]/5"></div>
        <div className="absolute -right-12 top-1/3 h-32 w-32 rounded-full bg-[#CD853F]/5"></div>
        <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-[#A0522D]/5"></div>

        {/* Additional background elements */}
        <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full border border-[#8B4513]/5"></div>
        <div className="absolute left-1/5 bottom-1/3 h-48 w-48 rounded-full border border-[#CD853F]/5"></div>

        {/* Dot patterns */}
        <div className="absolute left-10 top-1/2 h-32 w-32 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:8px_8px] opacity-[0.1]"></div>
        <div className="absolute right-20 bottom-1/3 h-32 w-32 bg-[radial-gradient(#CD853F_0.5px,transparent_0.5px)] [background-size:8px_8px] opacity-[0.1]"></div>

        {/* Gradient overlays */}
        <div className="absolute left-1/3 top-1/4 h-64 w-64 bg-gradient-radial from-[#8B4513]/[0.02] to-transparent"></div>
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 bg-gradient-radial from-[#CD853F]/[0.02] to-transparent"></div>

        {/* Decorative lines */}
        <div className="absolute left-20 top-1/3 h-32 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/10 to-[#8B4513]/0"></div>
        <div className="absolute right-24 bottom-1/4 h-32 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/10 to-[#8B4513]/0"></div>
      </div>

      {/* Hero Section with Framer Motion */}
      <section className="relative h-[25vh] min-h-[250px] w-full bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text font-script text-4xl text-transparent md:text-5xl lg:text-6xl"
          >
            Wedding Memory Book
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-2 max-w-2xl text-base text-[#8B4513]/80"
          >
            A collection of beautiful details that made our day special
          </motion.p>
        </div>
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('/images/texture-overlay.png')]"
        />
        <div className="pointer-events-none absolute bottom-0 h-16 w-full bg-gradient-to-t from-white to-transparent" />

        {/* Additional hero decorative elements */}
        <div className="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 transform rounded-full border border-[#8B4513]/10"></div>
        <div className="absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 transform rounded-full border border-[#8B4513]/10"></div>
        <div className="absolute left-1/4 top-0 h-24 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/5 to-[#8B4513]/0"></div>
        <div className="absolute right-1/4 top-0 h-24 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/5 to-[#8B4513]/0"></div>
      </section>

      {/* Memory Grid Section */}
      <section className="container relative mx-auto px-2 py-4">
        {/* Decorative corner elements */}
        <div className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:8px_8px] opacity-[0.1]"></div>
        <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:8px_8px] opacity-[0.1]"></div>

        {/* Additional corner flourishes */}
        <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full border border-[#8B4513]/5"></div>
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-[#8B4513]/5"></div>
        <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 bg-gradient-radial from-[#8B4513]/[0.02] to-transparent"></div>
        <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 bg-gradient-radial from-[#8B4513]/[0.02] to-transparent"></div>

        <MemoryGrid />
      </section>
    </main>
  );
}
