'use client';

import { debounceFrame, measureCoreWebVitals } from '@/lib/performance';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
}

export function PerformanceWrapper({ children }: PerformanceWrapperProps) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      // Preload critical resources
      const preloadLinks = [
        { rel: 'preload', href: '/fonts/playfair-display.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/dancing-script.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { rel: 'preload', href: '/images/texture-overlay.png', as: 'image' },
      ];

      preloadLinks.forEach(link => {
        const linkEl = document.createElement('link');
        Object.entries(link).forEach(([key, value]) => {
          linkEl.setAttribute(key, value);
        });
        document.head.appendChild(linkEl);
      });

      // Measure Core Web Vitals
      measureCoreWebVitals().then(metrics => {
        console.log('Core Web Vitals:', metrics);
      });

      setIsFirstLoad(false);
    }

    // Optimize scroll performance
    const handleScroll = () => {
      // Add any scroll-based optimizations here
    };

    const debouncedScroll = debounceFrame(handleScroll);
    window.addEventListener('scroll', debouncedScroll as EventListener, { passive: true });

    // Optimize image loading
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        // @ts-ignore
        img.loading = 'lazy';
      });
    }

    // Optimize animations
    const handleAnimationFrame = (time: number) => {
      // Add any animation frame optimizations here
    };

    const debouncedAnimation = debounceFrame(handleAnimationFrame);
    const rafId = requestAnimationFrame(debouncedAnimation as FrameRequestCallback);

    return () => {
      window.removeEventListener('scroll', debouncedScroll as EventListener);
      cancelAnimationFrame(rafId);
    };
  }, [pathname, isFirstLoad]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const lazyElements = document.querySelectorAll('[data-lazy]');

      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.removeAttribute('data-lazy');
            lazyObserver.unobserve(element);
          }
        });
      }, {
        rootMargin: '50px',
      });

      lazyElements.forEach(element => lazyObserver.observe(element));

      return () => lazyObserver.disconnect();
    }
  }, [pathname]);

  return <>{children}</>;
}
