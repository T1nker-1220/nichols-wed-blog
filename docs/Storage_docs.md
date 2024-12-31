# Media Storage Documentation

## Overview
This document outlines the media storage implementation using Supabase Storage while maintaining Prisma for database operations.

## Architecture
- **Database**: Prisma (PostgreSQL)
- **Media Storage**: Supabase Storage
- **File Types**: Images and Videos

## Storage Configuration
- **Buckets**:
  - `videos`: For video content
  - `images`: For image content

## Key Components

### Supabase Client (`src/lib/supabase.ts`)
- Handles Supabase initialization
- Manages storage connections
- Environment variables required:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Storage Utilities (`src/lib/storage.ts`)
Core functions for media management:
- `uploadFile`: Upload media files
- `getPublicUrl`: Get public URLs for media
- `deleteFile`: Remove files from storage
- `listFiles`: List stored files

## Usage Examples

```typescript
// Upload a file
const file = new File(['content'], 'example.mp4');
await uploadFile(file, STORAGE_BUCKETS.VIDEOS, 'path/example.mp4');

// Get public URL
const url = getPublicUrl(STORAGE_BUCKETS.IMAGES, 'path/image.jpg');

// List files
const files = await listFiles(STORAGE_BUCKETS.VIDEOS);
```

## Environment Setup
Required environment variables in `.env`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Security Considerations
- Public access controlled via Supabase policies
- Secure file uploads with size limits
- Content-type validation
- Rate limiting implemented

## Performance
- CDN-backed storage
- Caching enabled (3600s default)
- Optimized for large media files

## Recent Changes
- Added Supabase storage integration
- Created storage utility functions
- Implemented documentation
- Added TypeScript types and validation
