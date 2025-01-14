# Story Page Documentation

## Feature Overview
The Story page presents Jamaica and Morgan's love story through an elegant, interactive timeline. The page features a hero section, a chronological timeline of key events, and a closing section that ties their journey together.

## Technical Details
- **Component Type**: Server Component (Next.js App Router)
- **Location**: `src/app/story/page.tsx`
- **Dependencies**:
  - `@/data/story`: Story timeline data
  - `@/lib/utils`: Utility functions for className merging
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
    - Alternating event cards
    - Interactive timeline points
  </section>

  {/* Final Section */}
  <section className="closing">
    - Journey continues message
    - Future outlook
  </section>
</main>
```

### Timeline Events
The story is presented in five chronological milestones:
1. **Digital Beginning** (May 2023)
   - First meeting on Filipino Cupid
   - Building connection through shared dreams

2. **First Visit & Proposal** (December 29, 2023)
   - Morgan's journey to Philippines
   - Surprise proposal with mom's help

3. **Wedding Preparations** (March 22, 2024)
   - Three-month stay in Philippines
   - Wedding paper processing

4. **Wedding Day** (May 5, 2024)
   - Wedding ceremony
   - Honeymoon at Shangri-La Cebu
   - News of expecting Mayumi

5. **Growing Family** (2025)
   - Life with firstborn Mayumi
   - Continuing journey together

### Styling Details
#### Color Scheme
- Primary Colors:
  ```css
  from-[#8B4513] /* Saddle Brown */
  via-[#A0522D] /* Sienna */
  to-[#CD853F]  /* Peru */
  ```

#### Gradients
1. Background Gradients:
   ```css
   bg-gradient-to-b from-[#FDF8F4] to-white
   bg-gradient-to-b from-[#FDF1E7] via-[#F5E6D3] to-transparent
   ```

2. Text Gradients:
   ```css
   bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#CD853F] bg-clip-text
   ```

#### Interactive Elements
- Timeline Points:
  ```css
  .timeline-point {
    animate-ping
    bg-[#8B4513]/20
  }
  ```
- Event Cards:
  ```css
  .event-card {
    hover:scale-[1.02]
    transition-transform
    duration-300
  }
  ```

### Responsive Design
- Mobile: Base styling
- Tablet (md):
  - Heading: text-6xl
  - Full timeline view
- Desktop (lg):
  - Heading: text-7xl
  - Enhanced spacing

## Implementation Details
### Timeline Component
```tsx
{loveStory.map((event, index) => (
  <div className={cn(
    "flex items-center gap-8",
    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
  )}>
    {/* Event card structure */}
  </div>
))}
```

### Event Card Structure
```tsx
<div className="w-1/2 space-y-4 rounded-2xl bg-gradient-to-br from-[#FDF1E7] to-white p-6">
  <span className="date">{event.date}</span>
  <h3 className="title">{event.title}</h3>
  <p className="description">{event.description}</p>
</div>
```

## Performance Considerations
- Server Component for optimal loading
- Minimal client-side JavaScript
- CSS animations for smooth interactions
- Gradient text rendering optimization
- Responsive image handling

## Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast
- Readable text sizes
- Interactive elements feedback

## Future Enhancements
1. Image Integration:
   - Add photos for each milestone
   - Implement image galleries
   - Add photo viewing modal

2. Interactivity:
   - Smooth scroll to events
   - Timeline navigation
   - Event highlighting

3. Animation:
   - Entry animations
   - Scroll-based reveals
   - Transition effects

4. Content:
   - Additional story details
   - Photo memories
   - Personal quotes
   - Video content

## Maintenance Notes
- Update timeline events as new milestones occur
- Add images when available
- Keep descriptions current
- Maintain consistent styling
- Regular performance monitoring
