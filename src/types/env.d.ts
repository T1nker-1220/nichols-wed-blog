/**
 * @module env
 * @description Environment variable type definitions
 * @ai-context Type safety for environment variables
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string;
      NODE_ENV: 'development' | 'production' | 'test';
      VERCEL_ENV: 'production' | 'preview' | 'development';
      VERCEL_URL: string;
      VERCEL: string;
    }
  }
}
