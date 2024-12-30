// @ts-check

/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-dialog', '@radix-ui/react-navigation-menu'],
  },
};

export default config;
