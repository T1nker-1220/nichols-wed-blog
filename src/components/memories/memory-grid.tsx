"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const memoryImages = [
  {
    id: "wooden-basket",
    src: "/images/backgrounds/wooden basket.webp",
    alt: "Wooden basket with wedding details",
    title: "Wedding Essentials",
    description: "Carefully curated items for our special day",
    size: "large",
  },
  {
    id: "watch-bible",
    src: "/images/backgrounds/watch with bible.webp",
    alt: "Watch with bible",
    title: "Time & Faith",
    description: "Symbols of our journey together",
    size: "tall",
  },
  {
    id: "suit-coat",
    src: "/images/backgrounds/suit coat blue.webp",
    alt: "Blue suit coat",
    title: "Groom's Attire",
    description: "Elegance in every detail",
    size: "medium",
  },
  {
    id: "shoes-watch",
    src: "/images/backgrounds/shoes watch belt.webp",
    alt: "Shoes, watch, and belt",
    title: "Finishing Touches",
    description: "The perfect accessories",
    size: "wide",
  },
  {
    id: "ring-heels",
    src: "/images/backgrounds/ring with heels.webp",
    alt: "Ring with heels",
    title: "Symbols of Love",
    description: "Where elegance meets commitment",
    size: "medium",
  },
  {
    id: "ring-heart",
    src: "/images/backgrounds/ring in heart book.webp",
    alt: "Ring in heart book",
    title: "Written in Love",
    description: "Our story begins here",
    size: "tall",
  },
  {
    id: "perfume",
    src: "/images/backgrounds/perfume.webp",
    alt: "Wedding perfume",
    title: "Sweet Memories",
    description: "The scent of romance",
    size: "medium",
  },
  {
    id: "invitations",
    src: "/images/backgrounds/invitations with rings.webp",
    alt: "Invitations with rings",
    title: "The Invitation",
    description: "Announcing our love",
    size: "wide",
  },
  {
    id: "gown",
    src: "/images/backgrounds/gown.webp",
    alt: "Wedding gown",
    title: "The Dress",
    description: "A dream in white",
    size: "tall",
  },
  {
    id: "flower",
    src: "/images/backgrounds/flower white.webp",
    alt: "White flower",
    title: "Pure Beauty",
    description: "Nature's perfect touch",
    size: "medium",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2"; // Large square
    case "wide":
      return "md:col-span-2"; // Wide rectangle
    case "tall":
      return "md:row-span-2"; // Tall rectangle
    default:
      return ""; // Standard square
  }
};

export function MemoryGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative grid grid-cols-1 gap-1 md:grid-cols-6 lg:grid-cols-6"
    >
      {/* Decorative text elements */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {/* Elegant quotes */}
        <div className="absolute left-[35%] top-[28%] -rotate-90 transform">
          <p className="font-script text-2xl text-[#8B4513]/20">
            Our Special Day
          </p>
        </div>
        <div className="absolute right-[15%] top-[45%] rotate-90 transform">
          <p className="font-script text-2xl text-[#8B4513]/20">Forever Love</p>
        </div>
        <div className="absolute bottom-[25%] left-[20%] transform">
          <p className="font-script text-2xl text-[#8B4513]/20">
            Beautiful Moments
          </p>
        </div>
        <div className="absolute bottom-[40%] right-[25%] -rotate-45 transform">
          <p className="font-script text-2xl text-[#8B4513]/20">
            Cherished Details
          </p>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute left-[10%] top-[15%] transform">
          <div className="h-16 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/10 to-[#8B4513]/0"></div>
        </div>
        <div className="absolute right-[10%] top-[60%] transform">
          <div className="h-24 w-[1px] bg-gradient-to-b from-[#8B4513]/0 via-[#8B4513]/10 to-[#8B4513]/0"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute left-[25%] top-[40%] h-32 w-32 rounded-full border border-[#8B4513]/5"></div>
        <div className="absolute right-[20%] top-[30%] h-24 w-24 rounded-full border border-[#8B4513]/5"></div>

        {/* Small dots pattern */}
        <div className="absolute left-[15%] top-[55%] h-16 w-16 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:4px_4px] opacity-[0.1]"></div>
        <div className="absolute right-[30%] bottom-[20%] h-16 w-16 bg-[radial-gradient(#8B4513_0.5px,transparent_0.5px)] [background-size:4px_4px] opacity-[0.1]"></div>

        {/* Decorative lines */}
        <div className="absolute left-[30%] top-[35%] h-[1px] w-24 rotate-45 transform bg-gradient-to-r from-[#8B4513]/0 via-[#8B4513]/20 to-[#8B4513]/0"></div>
        <div className="absolute right-[28%] top-[55%] h-[1px] w-24 -rotate-45 transform bg-gradient-to-r from-[#8B4513]/0 via-[#8B4513]/20 to-[#8B4513]/0"></div>

        {/* Additional romantic quotes */}
        <div className="absolute left-[40%] bottom-[15%] transform">
          <p className="font-script text-lg text-[#8B4513]/15">Love & Joy</p>
        </div>
        <div className="absolute right-[40%] top-[20%] transform">
          <p className="font-script text-lg text-[#8B4513]/15">
            Together Forever
          </p>
        </div>

        {/* Decorative corner flourishes */}
        <div className="absolute left-0 top-0 h-24 w-24 bg-[url('/images/texture-overlay.png')] opacity-[0.05]"></div>
        <div className="absolute bottom-0 right-0 h-24 w-24 bg-[url('/images/texture-overlay.png')] opacity-[0.05]"></div>

        {/* Subtle gradient overlays */}
        <div className="absolute left-[45%] top-[50%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-[#8B4513]/[0.02] to-transparent"></div>
        <div className="absolute right-[35%] bottom-[30%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-[#CD853F]/[0.02] to-transparent"></div>
      </div>

      {/* Text block - 2x1 */}
      <motion.div
        key="wooden-basket"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative aspect-[2/1] overflow-hidden bg-[#FDF1E7]/20 md:col-span-3"
      >
        <Image
          src="/images/backgrounds/wooden basket.webp"
          alt="Wooden basket with wedding details"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.h3
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="font-script text-xl"
          >
            Wedding Essentials
          </motion.h3>
          <motion.p
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="mt-1 text-sm text-white/80"
          >
            Carefully curated items for our special day
          </motion.p>
        </div>
      </motion.div>

      {/* 4 small squares in 2x2 grid */}
      <div className="grid grid-cols-2 gap-1 md:col-span-3">
        {[
          {
            key: "watch-bible",
            src: "/images/backgrounds/watch with bible.webp",
            alt: "Watch with bible",
            title: "Time & Faith",
            desc: "Symbols of our journey together",
          },
          {
            key: "suit-coat",
            src: "/images/backgrounds/suit coat blue.webp",
            alt: "Blue suit coat",
            title: "Groom's Attire",
            desc: "Elegance in every detail",
          },
          {
            key: "ring-heels",
            src: "/images/backgrounds/ring with heels.webp",
            alt: "Ring with heels",
            title: "Symbols of Love",
            desc: "Where elegance meets commitment",
          },
          {
            key: "ring-heart",
            src: "/images/backgrounds/ring in heart book.webp",
            alt: "Ring in heart book",
            title: "Written in Love",
            desc: "Our story begins here",
          },
        ].map((item) => (
          <motion.div
            key={item.key}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative aspect-square overflow-hidden bg-[#FDF1E7]/20"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <motion.h3
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                className="font-script text-xl"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={false}
                animate={{ y: 0, opacity: 1 }}
                className="mt-1 text-sm text-white/80"
              >
                {item.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large feature - 3x2 */}
      <motion.div
        key="shoes-watch"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative aspect-[3/2] overflow-hidden bg-[#FDF1E7]/20 md:col-span-4"
      >
        <Image
          src="/images/backgrounds/shoes watch belt.webp"
          alt="Shoes, watch, and belt"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.h3
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="font-script text-xl"
          >
            Finishing Touches
          </motion.h3>
          <motion.p
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="mt-1 text-sm text-white/80"
          >
            The perfect accessories
          </motion.p>
        </div>
      </motion.div>

      {/* Vertical stack - 1x2 */}
      <div className="grid grid-rows-2 gap-1 md:col-span-2">
        <motion.div
          key="perfume"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative aspect-square overflow-hidden bg-[#FDF1E7]/20"
        >
          <Image
            src="/images/backgrounds/perfume.webp"
            alt="Wedding perfume"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 16.67vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.h3
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              className="font-script text-xl"
            >
              Sweet Memories
            </motion.h3>
            <motion.p
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              className="mt-1 text-sm text-white/80"
            >
              The scent of romance
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          key="flower"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative aspect-square overflow-hidden bg-[#FDF1E7]/20"
        >
          <Image
            src="/images/backgrounds/flower white.webp"
            alt="White flower"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 16.67vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.h3
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              className="font-script text-xl"
            >
              Pure Beauty
            </motion.h3>
            <motion.p
              initial={false}
              animate={{ y: 0, opacity: 1 }}
              className="mt-1 text-sm text-white/80"
            >
              Nature's perfect touch
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        key="invitations"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative aspect-[2/1] overflow-hidden bg-[#FDF1E7]/20 md:col-span-4"
      >
        <Image
          src="/images/backgrounds/invitations with rings.webp"
          alt="Invitations with rings"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.h3
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="font-script text-xl"
          >
            The Invitation
          </motion.h3>
          <motion.p
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="mt-1 text-sm text-white/80"
          >
            Announcing our love
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        key="gown"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative aspect-[2/1] overflow-hidden bg-[#FDF1E7]/20 md:col-span-2"
      >
        <Image
          src="/images/backgrounds/gown.webp"
          alt="Wedding gown"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.h3
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="font-script text-xl"
          >
            The Dress
          </motion.h3>
          <motion.p
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="mt-1 text-sm text-white/80"
          >
            A dream in white
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
