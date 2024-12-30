import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for guestbook entry
const guestbookSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  message: z.string().min(1, "Message is required").max(500),
  email: z.string().email("Invalid email").optional(),
});

export async function POST(req: NextRequest) {
  try {
    // Check rate limit (5 requests per minute)
    const rateLimitResult = rateLimit(req, { limit: 5, windowMs: 60000 });
    if (rateLimitResult) {
      console.log("Rate limit exceeded:", rateLimitResult);
      return rateLimitResult;
    }

    const body = await req.json();
    const validatedData = guestbookSchema.parse(body);

    const entry = await prisma.guestbookEntry.create({
      data: validatedData,
    });

    return NextResponse.json(entry, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("POST error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return NextResponse.json(
      { error: "Failed to create entry" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function GET() {
  try {
    // Add caching headers
    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=10, stale-while-revalidate=59",
    };

    // Fetch entries with proper error handling
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        message: true,
        createdAt: true,
        email: false, // Don't send email to client
      },
    });

    return NextResponse.json(entries, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Entry ID is required" },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const updatedEntry = await prisma.guestbookEntry.update({
      where: { id },
      data: { message },
      select: {
        id: true,
        name: true,
        message: true,
        createdAt: true,
      },
    });

    return NextResponse.json(updatedEntry, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update entry" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { error: "Entry ID is required" },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    await prisma.guestbookEntry.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete entry" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
