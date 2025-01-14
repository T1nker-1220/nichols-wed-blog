"use client";

import { StoryImage } from "@/data/story";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface StoryImageCarouselProps {
  images: StoryImage[];
  className?: string;
}

export function StoryImageCarousel({ images, className }: StoryImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  // Navigation functions
  const nextImage = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        previousImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, previousImage]);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [nextImage]);

  // Touch gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: previousImage,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
  });

  if (images.length === 0) return null;

  return (
    <div
      className={cn("group relative w-full overflow-hidden rounded-lg bg-background.paper", className)}
      {...handlers}
      role="region"
      aria-label="Image carousel"
    >
      {/* Main Image Container */}
      <div className="relative h-[600px] w-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className={cn(
            "object-contain transition-all duration-500",
            direction === "left" ? "animate-slide-left" : "animate-slide-right",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          priority={currentIndex === 0}
          onLoadingComplete={() => setIsLoading(false)}
        />

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background.paper">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary.main border-t-transparent" />
          </div>
        )}

        {/* Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-background.accent/50 p-2 backdrop-blur-sm">
            <p className="text-center font-sans text-small text-white">
              {images[currentIndex].caption}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background.accent/50 p-2 text-white opacity-0 transition-all hover:bg-background.accent/70 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary.main focus:ring-offset-2 sm:opacity-100"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background.accent/50 p-2 text-white opacity-0 transition-all hover:bg-background.accent/70 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary.main focus:ring-offset-2 sm:opacity-100"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary.main focus:ring-offset-2",
                currentIndex === index
                  ? "w-4 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
