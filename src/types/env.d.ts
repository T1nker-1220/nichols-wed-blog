/**
 * @module env
 * @description Environment variable type definitions
 * @ai-context Type safety for environment variables
 */

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DIRECT_URL: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
