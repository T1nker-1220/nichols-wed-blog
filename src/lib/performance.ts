/**
 * @module performance
 * @description Performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  FCP: number; // First Contentful Paint
  LCP: number; // Largest Contentful Paint
  FID: number; // First Input Delay
  CLS: number; // Cumulative Layout Shift
  TTFB: number; // Time To First Byte
}

// Extended Performance Entry Types
interface PerformanceEntryWithStart extends PerformanceEntry {
  processingStart?: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface NavigationEntry extends PerformanceEntry {
  responseStart: number;
}

export const measurePerformance = (name: string) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${name}-start`);
    return () => {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      const entries = performance.getEntriesByName(name);
      const lastEntry = entries[entries.length - 1];
      console.log(`${name} took ${lastEntry.duration.toFixed(2)}ms`);
    };
  }
  return () => { };
};

export const optimizeAnimation = (callback: (timestamp: number) => void): number => {
  let lastTime = 0;
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;

  const animate = (timestamp: number): number => {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;

    if (deltaTime >= frameInterval) {
      lastTime = timestamp - (deltaTime % frameInterval);
      callback(timestamp);
    }

    return requestAnimationFrame(animate);
  };

  return requestAnimationFrame(animate);
};

export const cancelAnimation = (id: number) => {
  cancelAnimationFrame(id);
};

export const measureCoreWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise((resolve) => {
    let metrics: Partial<PerformanceMetrics> = {};

    // Measure FCP
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        metrics.FCP = entries[0].startTime;
      }
    }).observe({ entryTypes: ['paint'] });

    // Measure LCP
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        metrics.LCP = entries[entries.length - 1].startTime;
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as PerformanceEntryWithStart[];
      if (entries.length > 0 && entries[0].processingStart) {
        metrics.FID = entries[0].processingStart - entries[0].startTime;
      }
    }).observe({ entryTypes: ['first-input'] });

    // Measure CLS
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as LayoutShiftEntry[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      metrics.CLS = clsValue;
    }).observe({ entryTypes: ['layout-shift'] });

    // Measure TTFB
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as NavigationEntry[];
      if (entries.length > 0) {
        metrics.TTFB = entries[0].responseStart;
      }
    }).observe({ entryTypes: ['navigation'] });

    // Resolve after collecting metrics
    setTimeout(() => {
      resolve(metrics as PerformanceMetrics);
    }, 3000);
  });
};

export const debounceFrame = (fn: Function): Function => {
  let frame: number;
  return (...params: any[]) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};
