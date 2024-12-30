"use client";

import { Icon } from "@/components/ui/icon";
import { useGalleryStore, type PhotoCategory } from "@/lib/store/gallery-store";
import { motion } from "framer-motion";
import {
  Church,
  Grid2x2,
  Heart,
  Music,
  PartyPopper,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories: {
  id: string;
  title: PhotoCategory;
  description: string;
  icon: typeof Heart;
}[] = [
  {
    id: "couple",
    title: "Couple Moments",
    description: "Intimate portraits and candid shots of Jamaica and Morgan",
    icon: Heart,
  },
  {
    id: "ceremony",
    title: "Entrance & Ceremony",
    description: "Sacred moments from our beautiful ceremony",
    icon: Church,
  },
  {
    id: "reception",
    title: "Reception Highlights",
    description: "Joyful celebrations with family and friends",
    icon: PartyPopper,
  },
  {
    id: "dance",
    title: "First Dance & Celebrations",
    description: "Special moments from our first dance and celebrations",
    icon: Music,
  },
  {
    id: "group",
    title: "Group & Family Shots",
    description: "Cherished photos with our loved ones",
    icon: Users,
  },
];

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

export default function CategoryPreview() {
  const { photos, getPhotosByCategory } = useGalleryStore();

  if (!photos.length) {
    return null; // Or a loading state
  }

  return (
    <section className="py-16 bg-background-paper">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Icon icon={Grid2x2} color="accent" />
          <h2 className="text-3xl font-serif font-bold text-center text-text-primary">
            Browse Categories
          </h2>
          <Icon icon={Grid2x2} color="accent" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-secondary text-center max-w-2xl mx-auto mb-12"
        >
          Explore our wedding memories by category
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => {
            const categoryPhotos = getPhotosByCategory(category.title);
            const previewPhoto = categoryPhotos[0];

            if (!previewPhoto) return null;

            return (
              <motion.div
                key={category.id}
                variants={item}
                className="group cursor-pointer"
              >
                <Link
                  href={`/gallery?category=${encodeURIComponent(
                    category.title
                  )}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-background-paper">
                    <Image
                      src={previewPhoto.src}
                      alt={category.title}
                      width={previewPhoto.width}
                      height={previewPhoto.height}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            icon={category.icon}
                            size={20}
                            className="text-white"
                          />
                          <h3 className="text-white text-xl font-serif font-bold">
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-white/90 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
