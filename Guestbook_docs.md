# Guestbook Feature Documentation

## Overview
The Guestbook feature allows wedding guests to leave messages and wishes for the couple. It includes real-time updates, optimistic UI updates, and robust error handling to ensure message persistence even under poor network conditions.

## Technical Details
- **Component Type**: Client Components (Next.js App Router)
- **Location**:
  - `src/components/guestbook/guestbook-form.tsx`
  - `src/components/guestbook/guestbook-entries.tsx`
  - `src/app/api/guestbook/route.ts`

### Architecture
```typescript
// Component Structure
GuestbookPage
├── GuestbookForm (Message submission)
└── GuestbookEntries (Message display)
    └── Pagination Component
```

## Implementation Details

### Form Component (`GuestbookForm`)
```typescript
interface GuestbookFormData {
  name: string;    // Required, 2-100 chars
  message: string; // Required, 1-500 chars
  email?: string;  // Optional, valid email
}

// Key Features:
- Form validation using Zod
- Request timeout handling (10s)
- Optimistic UI updates
- Local storage integration
- Custom event dispatch
- Comprehensive error handling
```

#### Error Handling Strategy
```typescript
try {
  // 1. Validate input
  const validatedData = guestbookSchema.parse(data);

  // 2. Handle network timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  // 3. Submit with error handling
  const response = await fetch("/api/guestbook", {
    signal: controller.signal,
    // ... other options
  });

  // 4. Handle success/failure
  if (response.status === 201) {
    // Update local storage & UI
  }
} catch (err) {
  // Specific error handling
}
```

### Entries Component (`GuestbookEntries`)
```typescript
interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  email?: string;
}

// Key Features:
- Real-time updates with error backoff
- Pagination (5 items per page)
- Edit/Delete functionality
- Local storage synchronization
- Cache control headers
```

#### Polling Strategy
```typescript
// Progressive backoff implementation
let pollInterval = 5000; // Initial: 5s
const maxInterval = 30000; // Max: 30s

const interval = setInterval(() => {
  fetchEntries().catch(() => {
    pollInterval = Math.min(pollInterval * 1.5, maxInterval);
  });
}, pollInterval);
```

## Recent Improvements

### 1. Network Resilience
- Implemented request timeout handling
- Added AbortController for request cancellation
- Enhanced error message clarity
- Added cache control headers
- Implemented exponential backoff for polling

### 2. State Management
- Improved success/error state handling
- Added optimistic UI updates
- Enhanced localStorage synchronization
- Implemented proper cleanup
- Added custom event system

### 3. Error Handling
```typescript
// Enhanced error categories:
- Validation errors (Zod)
- Network timeouts
- Server errors
- JSON parsing errors
- Storage errors
```

### 4. Performance Optimizations
- Implemented proper cleanup of event listeners
- Added request debouncing
- Optimized re-render cycles
- Enhanced cache control
- Improved polling efficiency

## Troubleshooting Guide

### Common Issues and Solutions

1. **"Failed to fetch" Error**
   ```typescript
   // Possible causes:
   - Network timeout
   - Server unavailability
   - CORS issues

   // Solutions:
   - Implemented 10s timeout
   - Added retry mechanism
   - Enhanced error messages
   - Added network status check
   ```

2. **Message Submission Issues**
   ```typescript
   // Symptoms:
   - Success shown but message missing
   - Double submissions
   - Stale data

   // Solutions:
   - Added optimistic updates
   - Implemented proper state reset
   - Enhanced cache control
   - Added custom event system
   ```

3. **Real-time Update Issues**
   ```typescript
   // Symptoms:
   - Delayed updates
   - Missing messages
   - Duplicate entries

   // Solutions:
   - Implemented polling with backoff
   - Added manual refresh trigger
   - Enhanced state synchronization
   ```

### Error Recovery Mechanisms

1. **Network Recovery**
```typescript
// Progressive backoff implementation
const backoffStrategy = {
  initial: 5000,
  multiplier: 1.5,
  maxInterval: 30000,
  reset: () => {
    pollInterval = initial;
  }
};
```

2. **State Recovery**
```typescript
// Local storage synchronization
const syncState = {
  save: (entry) => {
    const entries = getStoredEntries();
    localStorage.setItem('userEntries',
      JSON.stringify([...entries, entry])
    );
  },
  recover: () => {
    return getStoredEntries();
  }
};
```

## Best Practices

### 1. Form Submission
- Validate input before submission
- Show clear loading states
- Provide meaningful error messages
- Handle network timeouts
- Implement proper cleanup

### 2. Data Fetching
- Use proper cache control
- Implement polling with backoff
- Handle network errors gracefully
- Clean up resources properly
- Maintain state consistency

### 3. Error Handling
- Provide user-friendly messages
- Log errors for debugging
- Handle edge cases
- Implement recovery mechanisms
- Maintain data consistency

## Maintenance Notes

### Regular Checks
- Monitor error rates
- Review performance metrics
- Check network resilience
- Validate data consistency
- Update error messages

### Performance Monitoring
- Network request timing
- Component render performance
- State update efficiency
- Memory usage
- Error frequency

## Future Improvements

1. **Enhanced Reliability**
   - Offline support
   - Service worker integration
   - Better conflict resolution
   - Enhanced sync mechanisms
   - Improved error recovery

2. **User Experience**
   - Rich text formatting
   - Image attachments
   - Real-time collaboration
   - Enhanced notifications
   - Improved accessibility

3. **Performance**
   - Virtual scrolling
   - Optimized polling
   - Better caching
   - Reduced bundle size
   - Enhanced loading states

4. **Security**
   - Enhanced rate limiting
   - Better validation
   - CSRF protection
   - Input sanitization
   - Access control
