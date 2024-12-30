"use client";

import Image from "next/image";

interface PhotoCardProps {
  image: {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  onClick?: () => void;
  priority?: boolean;
}

export function PhotoCard({
  image,
  onClick,
  priority = false,
}: PhotoCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
      onClick={onClick}
    >
      <div className="aspect-[4/3] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={85}
          priority={priority}
        />
      </div>

      {(image.caption || image.credit) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
          {image.caption && (
            <p className="font-elegant text-base md:text-lg text-white line-clamp-2">
              {image.caption}
            </p>
          )}
          {image.credit && (
            <p className="mt-1 text-xs md:text-sm text-white/80 line-clamp-1">
              {image.credit}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
