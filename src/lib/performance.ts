/**
 * @module performance
 * @description Performance monitoring and optimization utilities
 */

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
  return () => {};
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
