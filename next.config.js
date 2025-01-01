// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nicholsweddingmemories.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    unoptimized: false,
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Disable features that might cause recursion
    turbotrace: {
      contextDirectory: __dirname,
      processCwd: __dirname,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add webpack configuration to handle recursion
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "**/.git", "**/.next"],
    };
    return config;
  },
};

module.exports = nextConfig;
