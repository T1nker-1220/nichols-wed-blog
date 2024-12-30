"use client";

import VideoHero from "@/components/home/video-hero";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Video Hero Section */}
      <VideoHero />

      {/* Welcome Section */}
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-4xl text-[#CD853F] md:text-6xl lg:text-7xl"
          >
            Jamaica & Morgan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/90"
          >
            Welcome to our wedding memories. Join us in celebrating our love
            story and the beautiful moments we shared on our special day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <button
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  video.play();
                  video.requestFullscreen();
                }
              }}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] px-8 py-3 text-white shadow-lg shadow-[#8B4513]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Play Video
              </span>
              <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-[length:200%_100%]" />
            </button>
            <a
              href="/story"
              className="rounded-lg bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
