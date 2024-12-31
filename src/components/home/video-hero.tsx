'use client';

/**
 * @module VideoHero
 * @description Hero video component for the homepage using YouTube embed
 * @ai-context Homepage video display
 */

import { useEffect, useRef, useState, memo } from 'react';
import { optimizeAnimation, cancelAnimation } from '@/lib/performance';

const VideoHero = memo(function VideoHero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = "pPPupzsXoHM";
  const [videoUrl, setVideoUrl] = useState('');
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set video URL with performance optimization parameters
      setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&widgetid=1`);
      
      // Optimize frame rate with timestamp
      const animate = (timestamp: number): void => {
        if (iframeRef.current) {
          // Frame-specific optimizations can use timestamp if needed
        }
      };
      
      // Start the animation loop
      animationRef.current = optimizeAnimation(animate);
    }

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimation(animationRef.current);
      }
    };
  }, [videoId]);

  return (
    <section className="fixed left-0 top-0 h-screen w-full bg-black will-change-transform">
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

          {/* Overlay gradient with hardware acceleration */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50 will-change-transform" />
        </div>
      </div>
    </section>
  );
});

VideoHero.displayName = 'VideoHero';
export default VideoHero;
