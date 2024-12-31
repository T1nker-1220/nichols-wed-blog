/**
 * @module local-images
 * @description Utilities for handling local images in the public directory
 */

import { StaticImageData } from 'next/image';

export interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Get the public URL for an image in the public directory
 */
export function getImagePath(filename: string): string {
  return `/images/${filename}`;
}

/**
 * Get image metadata for Next.js Image component
 */
export function getImageMetadata(filename: string, alt: string): ImageMetadata {
  return {
    src: getImagePath(filename),
    alt,
    width: 1920, // Default width, adjust as needed
    height: 1080, // Default height, adjust as needed
  };
}

/**
 * Example usage in a component:
 * 
 * import Image from 'next/image';
 * import { getImageMetadata } from '@/lib/local-images';
 * 
 * export default function MyComponent() {
 *   const imageData = getImageMetadata('my-image.jpg', 'My Image Description');
 *   
 *   return (
 *     <Image
 *       {...imageData}
 *       priority={true}
 *       className="w-full h-auto"
 *     />
 *   );
 * }
 */
