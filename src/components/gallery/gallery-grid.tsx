"use client";

import { categories, galleryImages } from "@/data/gallery";
import Image from "next/image";
import { useState } from "react";

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set([...prev, imageSrc]));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Category Filter - Scrollable on mobile */}
      <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
        <div className="overflow-x-auto pb-4 md:overflow-visible md:pb-0">
          <div className="min-w-max md:min-w-0">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] text-white shadow-lg"
                      : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Fade effect for scroll indication */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>

      {/* Gallery Grid - Optimized for mobile */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image.src)}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#FDF1E7]/20 shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                  loadedImages.has(image.src) ? "opacity-100" : "opacity-0"
                }`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
                loading={index < 8 ? "eager" : "lazy"}
                priority={image.featured && index < 4}
                onLoad={() => handleImageLoad(image.src)}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVJW1L/2wBDARUXFx4aHR4eHVJBNkFSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              {!loadedImages.has(image.src) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B4513] border-t-transparent" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox - Full screen on mobile */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-full w-full md:h-auto md:max-h-[90vh] md:max-w-[90vw]">
            <Image
              src={selectedImage}
              alt="Selected photo"
              className="h-full w-full object-contain"
              width={1200}
              height={800}
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVJW1L/2wBDARUXFx4aHR4eHVJBNkFSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            {/* Close button overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
