"use client";

/**
 * @module VideoHero
 * @description Hero video component for the homepage using YouTube embed
 * @ai-context Homepage video display
 */

import { useEffect, useRef, useState } from "react";

export default function VideoHero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = "pPPupzsXoHM";
  const [videoUrl, setVideoUrl] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`);
    }
  }, [videoId]);

  return (
    <section className="fixed left-0 top-0 h-screen w-full bg-black">
      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          <div className="absolute h-full w-full">
            {videoUrl && (
              <iframe
                ref={iframeRef}
                className="h-full w-full border-none"
                src={videoUrl}
                title="Wedding Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
        </div>
      </div>
    </section>
  );
}
