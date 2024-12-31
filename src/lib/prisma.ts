/**
 * @module prisma
 * @description Prisma client singleton configuration for database access
 * @ai-context Database connection management
 */

import { PrismaClient } from "@prisma/client";

// [Purpose]: Define type for global prisma instance
type GlobalWithPrisma = typeof globalThis & {
  prisma: PrismaClient | undefined;
};

// [Purpose]: Initialize PrismaClient with error logging
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['error'],
    errorFormat: 'pretty'
  });
};

// [Purpose]: Create a singleton instance of PrismaClient
const prisma = (globalThis as GlobalWithPrisma).prisma ?? prismaClientSingleton();

// [Purpose]: Set the global prisma instance in development
if (process.env.NODE_ENV !== "production") {
  (globalThis as GlobalWithPrisma).prisma = prisma;
}

export { prisma };
