// db.ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
prisma.$connect().then(() => {
  console.log('Prisma reconnected');
}).catch(console.error);

/**
 * Checks if the database connection is active.
 * @returns Promise<boolean> Resolves to `true` if connected, otherwise `false`.
 */
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$connect();
    await prisma.about.findFirst();

    console.log('✅ Database connection is active.');
    return true;  
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}
