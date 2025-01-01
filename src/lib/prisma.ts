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
  return new PrismaClient({
    log: ['error', 'warn'],
    errorFormat: 'pretty',
  });
};

// [Purpose]: Create a global prisma instance or reuse existing one
export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// [Purpose]: Handle connection errors
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
