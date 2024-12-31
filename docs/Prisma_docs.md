# Prisma Database Configuration

## Overview
This document outlines the Prisma database configuration and client setup for the Nichols Wedding Blog application.

## Database Client Setup
The application uses a singleton pattern for the Prisma client to prevent multiple database connections.

### Key Components

#### Prisma Client (`src/lib/prisma.ts`)
- Implements singleton pattern for database connections
- Includes error logging configuration
- Development environment specific handling
- Type-safe database operations

### Error Handling
- Pretty error formatting enabled
- Error logging configured for production monitoring
- Development environment specific error tracking

### Type Safety
- Full TypeScript integration
- Global type declarations for PrismaClient
- Type-safe database queries

## Schema
Located in `prisma/schema.prisma`

### Models

#### GuestbookEntry
- `id`: String (CUID, Primary Key)
- `name`: String (Required)
- `message`: String (Required)
- `email`: String (Optional)
- `createdAt`: DateTime (Auto-generated)
- `updatedAt`: DateTime (Auto-updated)

## Usage Examples

```typescript
// Fetch entries
const entries = await prisma.guestbookEntry.findMany();

// Create entry
const entry = await prisma.guestbookEntry.create({
  data: {
    name: "John Doe",
    message: "Congratulations!",
    email: "john@example.com"
  }
});
```

## Recent Changes
- Added Prisma client singleton pattern
- Implemented error logging
- Added TypeScript type safety
- Created comprehensive documentation

## Dependencies
- @prisma/client
- PostgreSQL database

## Performance Considerations
- Connection pooling enabled
- Singleton pattern prevents connection leaks
- Optimized query performance

## Security
- Environment variables for database credentials
- No exposed connection details
- Secure connection handling
