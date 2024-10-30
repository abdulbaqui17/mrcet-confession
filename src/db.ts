import { PrismaClient } from '@prisma/client';

// Create a singleton for the Prisma Client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare globalThis with the type for your Prisma client
declare const global: {
  prisma: PrismaClient | undefined;
};

// Initialize the Prisma client
const prisma = global.prisma || prismaClientSingleton();

// Assign the Prisma client to global for non-production environments
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
