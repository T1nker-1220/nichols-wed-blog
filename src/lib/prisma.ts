/**
 * @module prisma
 * @description Prisma client singleton configuration for database access
 * @ai-context Database connection management
 */

import { PrismaClient } from "@prisma/client";

// [Purpose]: Define type for global prisma instance
declare global {
  var prisma: PrismaClient | undefined;
}

// [Purpose]: Initialize PrismaClient with error logging
const prismaClientSingleton = () => {
  try {
    return new PrismaClient({
      log: ["error", "warn"],
      errorFormat: "pretty",
    });
  } catch (error) {
    console.error("Failed to initialize Prisma Client:", error);
    throw error;
  }
};

// [Purpose]: Create a global prisma instance or reuse existing one
const prismaInstance = globalThis.prisma ?? prismaClientSingleton();

// [Purpose]: Ensure we're not recreating the client in development
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaInstance;
}

// [Purpose]: Handle connection errors and retry logic
const initializePrisma = async () => {
  try {
    await prismaInstance.$connect();
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    // Retry connection after 5 seconds
    setTimeout(initializePrisma, 5000);
  }
};

// Initialize connection
initializePrisma();

export const prisma = prismaInstance;
