'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface PerformanceWrapperProps {
  children: ReactNode;
}

export function PerformanceWrapper({ children }: PerformanceWrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/your-main-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      // Add more critical resources here
    ];

    preloadLinks.forEach(link => {
      const linkEl = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        linkEl.setAttribute(key, value);
      });
      document.head.appendChild(linkEl);
    });

    // Optimize frame rate
    const rafCallback = () => {
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(rafCallback);
      }
    };
    const rafId = requestAnimationFrame(rafCallback);

    return () => {
      if (typeof window !== 'undefined') {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
