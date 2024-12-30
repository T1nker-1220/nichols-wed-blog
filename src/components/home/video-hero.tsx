"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../ui/icon";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullPlayer, setIsFullPlayer] = useState(false);

  useEffect(() => {
    try {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      }
    } catch (error) {
      console.error("VideoHero component failed:", error);
    }
  }, []);

  const handleClose = () => {
    setIsFullPlayer(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="fixed left-0 top-0 h-screen w-full bg-black">
      {/* Video Container */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full transition-all duration-500",
          isFullPlayer ? "z-50 bg-black/90" : ""
        )}
      >
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            className={cn(
              "absolute h-full w-full transition-all duration-500",
              isFullPlayer
                ? "cursor-default object-contain"
                : "cursor-default object-cover"
            )}
            autoPlay
            muted={!isFullPlayer}
            loop={!isFullPlayer}
            playsInline
            controls={isFullPlayer}
            onError={() => {
              console.error("Video load failed");
            }}
          >
            <source src="/images/videos/WEDDING_MONTAGE.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay gradient */}
          {!isFullPlayer && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
          )}

          {/* Close button */}
          {isFullPlayer && (
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 text-white transition-colors hover:text-gray-300"
              title="Close video player"
              aria-label="Close video player"
            >
              <Icon icon={X} className="h-8 w-8" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
