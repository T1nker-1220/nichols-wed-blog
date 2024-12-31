/**
 * @module images
 * @description Image utilities for handling local images in the public directory
 */

/**
 * Get the public URL for an image in the public directory
 * @param {string} imagePath - The path to the image relative to the public/images directory
 * @returns {string} The public URL for the image
 */
export function getImageUrl(imagePath: string): string {
  return `/images/${imagePath}`;
}

/**
 * Get dimensions for an image to be used with next/image
 * @param {string} imageName - The name of the image
 * @returns {{ width: number, height: number }} The dimensions of the image
 */
export function getImageDimensions(imageName: string): { width: number; height: number } {
  // Add image dimensions here as needed
  const dimensions: Record<string, { width: number; height: number }> = {
    // Example:
    // 'hero.jpg': { width: 1920, height: 1080 },
  };

  return dimensions[imageName] || { width: 1920, height: 1080 }; // Default dimensions
}
