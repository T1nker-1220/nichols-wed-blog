"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation"
      onClick={onClick}
    >
      <div className="aspect-[4/3] w-full relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-main border-t-transparent"></div>
          </div>
        )}
        <Image
          src={image.src}
          alt={image.alt}
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={85}
          priority={priority}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-sm text-gray-500">Failed to load image</p>
          </div>
        )}
      </div>

      {(image.caption || image.credit) && !hasError && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4">
          {image.caption && (
            <p className="text-sm text-white md:text-base">{image.caption}</p>
          )}
          {image.credit && (
            <p className="mt-1 text-xs text-white/80">{image.credit}</p>
          )}
        </div>
      )}
    </div>
  );
}
