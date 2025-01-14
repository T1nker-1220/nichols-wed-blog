# Story Page Documentation

## Feature Overview
The Story page presents Jamaica and Morgan's love story through an elegant, interactive timeline. The page features a hero section, a chronological timeline of key events with optimized image carousels, and a closing section that ties their journey together.

## Technical Details
- **Component Type**: Server Component (Next.js App Router)
- **Location**: `src/app/story/page.tsx`
- **Dependencies**:
  - `@/data/story`: Story timeline data
  - `@/lib/utils`: Utility functions for className merging
  - `@/components/StoryImageCarousel`: Enhanced image carousel component
  - Next.js Metadata API

### Page Structure
```tsx
<main>
  {/* Hero Section */}
  <section className="hero">
    - Title: "Our Love Story"
    - Subtitle
    - Decorative overlays
  </section>

  {/* Timeline Section */}
  <section className="timeline">
    - Vertical timeline line
    - Alternating event cards with image carousels
    - Interactive timeline points
  </section>

  {/* Final Section */}
  <section className="closing">
    - Journey continues message
    - Future outlook
  </section>
</main>
```

### Image Carousel Implementation
The `StoryImageCarousel` component has been enhanced with the following features:

```tsx
interface StoryImageCarouselProps {
  images: StoryImage[];
  className?: string;
}

// Key Features:
- Full-size image display (600px height container)
- Object-fit: contain for proper image scaling
- Automatic image advancement (5-second intervals)
- Touch and swipe gesture support
- Keyboard navigation (left/right arrows)
- Loading indicators
- Image captions with backdrop blur
- Responsive design
- Accessibility features
```

#### Carousel Optimizations:
- Optimized image loading with Next.js Image component
- Proper image sizing and aspect ratio handling
- Smooth transitions and animations
- Mobile-first responsive design
- Performance-optimized event handlers
- Memory leak prevention
- Touch gesture support via react-swipeable

### Image Optimization
Images are now processed through an automated optimization pipeline:

```javascript
// Image Processing Configuration
{
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
}
```

#### Optimization Features:
- Multiple format generation (WebP, AVIF)
- Responsive sizes creation
- Blur placeholder generation
- Quality optimization (75%)
- Maximum width limitation (1920px)
- Extended cache TTL (30 days)

### Timeline Events
The story is presented in five chronological milestones, each with optimized image carousels:

1. **Digital Beginning** (May 2023)
   - First meeting on Filipino Cupid
   - Building connection through shared dreams
   - Optimized image carousel with chat screenshots

2. **First Visit & Proposal** (December 29, 2023)
   - Morgan's journey to Philippines
   - Surprise proposal with mom's help
   - High-quality proposal moment images

3. **Wedding Preparations** (March 22, 2024)
   - Three-month stay in Philippines
   - Wedding paper processing
   - Preparation activity photos

4. **Wedding Day** (May 5, 2024)
   - Wedding ceremony
   - Honeymoon at Shangri-La Cebu
   - News of expecting Mayumi
   - Professional wedding photography

5. **Growing Family** (2025)
   - Life with firstborn Mayumi
   - Continuing journey together
   - Family moments gallery

### Performance Optimizations

#### Image Loading Strategy
```typescript
// Implemented in StoryImageCarousel
- Priority loading for first image
- Lazy loading for subsequent images
- Proper sizing attributes
- Blur placeholder implementation
- Progressive image loading
```

#### Animation Performance
```typescript
// Optimized animations with RAF
const optimizeAnimation = (callback: (timestamp: number) => void): number => {
  let lastTime = 0;
  const targetFPS = 60;
  const frameInterval = 1000 / targetFPS;
  // Implementation details
};
```

#### Event Handler Optimization
```typescript
// Debounced event handlers
const debouncedScroll = debounceFrame(handleScroll);
window.addEventListener('scroll', debouncedScroll, { passive: true });
```

### Styling Details
#### Enhanced Color Scheme
- Primary Colors:
  ```css
  from-[#8B4513] /* Saddle Brown */
  via-[#A0522D] /* Sienna */
  to-[#CD853F]  /* Peru */
  ```

#### Improved Gradients
1. Background Gradients:
   ```css
   bg-gradient-to-b from-[#FDF8F4] to-white
   bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent
   ```

2. Text Gradients:
   ```css
   bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text
   ```

### Accessibility Improvements
- Enhanced keyboard navigation
- ARIA labels for carousel controls
- Proper focus management
- Screen reader considerations
- Touch target sizing
- Color contrast compliance

### Responsive Design
- Mobile-first implementation
- Dynamic image sizing
- Flexible carousel height
- Touch-friendly controls
- Responsive typography
- Adaptive layouts

## Performance Monitoring
The page now includes comprehensive performance monitoring:

```typescript
interface PerformanceMetrics {
  FCP: number; // First Contentful Paint
  LCP: number; // Largest Contentful Paint
  FID: number; // First Input Delay
  CLS: number; // Cumulative Layout Shift
  TTFB: number; // Time To First Byte
}
```

### Monitoring Implementation
- Core Web Vitals tracking
- Performance metrics logging
- Layout shift monitoring
- Loading performance tracking
- Animation frame optimization

## Future Enhancements
1. Image Features:
   - Advanced image preloading
   - Adaptive image quality
   - Enhanced placeholder generation
   - Progressive image loading
   - Image compression optimization

2. Performance:
   - Virtual scrolling for timeline
   - Intersection Observer optimization
   - Enhanced caching strategies
   - Resource prioritization
   - Bundle size optimization

3. User Experience:
   - Enhanced touch interactions
   - Improved animation timing
   - Advanced gesture controls
   - Smoother transitions
   - Keyboard shortcuts

4. Accessibility:
   - Enhanced screen reader support
   - Improved focus management
   - Better ARIA implementation
   - Keyboard navigation patterns
   - Touch target optimization

## Maintenance Notes
- Regular performance monitoring
- Image optimization verification
- Cache management
- Animation performance checks
- Accessibility compliance
- Browser compatibility testing
- Mobile responsiveness validation
- Documentation updates
