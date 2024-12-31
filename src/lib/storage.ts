/**
 * @module storage
 * @description Media storage utilities using Supabase
 * @ai-context Media file management
 * @ai-dependencies supabase
 */

import { supabase } from './supabase';

// [Purpose]: Define storage bucket names
export const STORAGE_BUCKETS = {
  VIDEOS: 'videos',
  IMAGES: 'images',
} as const;

/**
 * @function uploadFile
 * @description Upload a file to Supabase storage
 * @param {File} file - The file to upload
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The path within the bucket
 */
export async function uploadFile(file: File, bucket: string, path: string) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;
  return data;
}

/**
 * @function getPublicUrl
 * @description Get the public URL for a file
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The path within the bucket
 */
export function getPublicUrl(bucket: string, path: string) {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  
  return data.publicUrl;
}

/**
 * @function deleteFile
 * @description Delete a file from storage
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The path within the bucket
 */
export async function deleteFile(bucket: string, path: string) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) throw error;
}

/**
 * @function listFiles
 * @description List files in a bucket
 * @param {string} bucket - The storage bucket name
 * @param {string} prefix - Optional path prefix to filter by
 */
export async function listFiles(bucket: string, prefix?: string) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(prefix || '');

  if (error) throw error;
  return data;
}
