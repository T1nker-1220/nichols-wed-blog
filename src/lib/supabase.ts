/**
 * @module supabase
 * @description Supabase client configuration for storage management
 * @ai-context Storage service configuration
 * @ai-relationships - Interacts with media storage operations
 */

import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL) {
  throw new Error('Missing SUPABASE_URL environment variable');
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error('Missing SUPABASE_ANON_KEY environment variable');
}

// [Purpose]: Create and export Supabase client instance
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false
    }
  }
);
