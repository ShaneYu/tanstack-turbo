import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.SERVER_DATABASE_URL,
});

declare global {
  var __prisma: PrismaClient | undefined;
}

export const db = globalThis.__prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = db;
}
