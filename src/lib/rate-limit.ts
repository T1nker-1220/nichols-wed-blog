import { NextRequest, NextResponse } from "next/server";

interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  req: NextRequest,
  { limit = 5, windowMs = 60000 }: RateLimitOptions
) {
  // Get IP from X-Forwarded-For header or fallback to client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const windowStart = now - windowMs;

  // Clean up old entries
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < windowStart) {
      rateLimitStore.delete(key);
    }
  }

  // Get existing rate limit info
  const rateLimit = rateLimitStore.get(ip) || {
    count: 0,
    resetTime: now + windowMs,
  };

  // Reset if outside window
  if (rateLimit.resetTime < now) {
    rateLimit.count = 0;
    rateLimit.resetTime = now + windowMs;
  }

  rateLimit.count++;
  rateLimitStore.set(ip, rateLimit);

  if (rateLimit.count > limit) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(
            (rateLimit.resetTime - now) / 1000
          ).toString(),
        },
      }
    );
  }

  return null;
}
