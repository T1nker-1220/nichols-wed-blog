# Next.js Configuration Documentation

## Configuration Overview

The `next.config.js` file uses ES module syntax and defines the core configuration for the Next.js application.

### Key Features

- **Image Optimization**: Configured with WebP support and optimized device sizes
- **Performance Optimizations**: CSS and package import optimizations enabled
- **TypeScript Support**: Includes type checking and proper type definitions

### Important Notes

- Uses ES modules syntax
- Type-checked using `@ts-check` directive
- Properly typed using `NextConfig` type from Next.js

### Code Structure

```javascript
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
    optimizePackageImports: ['@radix-ui/react-dialog', '@radix-ui/react-navigation-menu']
  }
};

export default config;
```

### Image Optimization Settings

- Supports WebP format
- Optimized device sizes: [640, 750, 828, 1080, 1200, 1920]
- Image sizes: [16, 32, 48, 64, 96, 128, 256, 384]
- 30-day minimum cache TTL

### Performance Features

- CSS optimization enabled
- Package imports optimized for:
  - @radix-ui/react-dialog
  - @radix-ui/react-navigation-menu

### Recent Changes

- Removed Sentry integration for simplified configuration
- Maintained all image optimization settings
- Preserved performance optimizations
- Kept TypeScript type safety

### Dependencies

- next: Core Next.js framework
- Various Radix UI components for UI elements

@ai-context This configuration file provides core Next.js setup with focus on performance and image optimization
@ai-dependencies next, @radix-ui/react-dialog, @radix-ui/react-navigation-menu
@ai-relationships Affects build process, image optimization, and CSS processing
