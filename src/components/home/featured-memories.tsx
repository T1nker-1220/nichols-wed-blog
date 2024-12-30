"use client";

import { Icon } from "@/components/ui/icon";
import { useGalleryStore } from "@/lib/store/gallery-store";
import { motion } from "framer-motion";
import { Camera, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function FeaturedMemories() {
  const { photos } = useGalleryStore();
  const featuredPhotos = photos.filter((photo) => photo.priority).slice(0, 3);

  if (!featuredPhotos.length) {
    return null; // Or a loading state
  }

  return (
    <section className="py-16 bg-background-default">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Icon icon={Heart} color="accent" className="animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-titles text-center text-text-primary">
            Featured Memories
          </h2>
          <Icon icon={Heart} color="accent" className="animate-pulse" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary text-center max-w-2xl mx-auto mb-12 font-elegant text-lg"
        >
          Explore some of our favorite moments from our special day
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={item}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-background-paper"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-elegant text-lg">
                    {photo.caption}
                  </p>
                  {photo.credit && (
                    <div className="flex items-center gap-1 text-white/80 text-sm mt-1 font-elegant">
                      <Icon icon={Camera} size={14} className="text-white/80" />
                      <span>Photo by: {photo.credit}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-main text-white rounded-full hover:bg-primary-dark transition-colors font-save-date text-xl"
          >
            <span>View All Memories</span>
            <Icon icon={ChevronRight} size={20} className="text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
