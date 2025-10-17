import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis || { prisma: null };

const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
