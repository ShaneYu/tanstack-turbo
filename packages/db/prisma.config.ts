import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./src/schema",
  migrations: {
    path: "./src/migrations",
    seed: "tsx src/seed.ts",
  },
  datasource: {
    url: process.env.SERVER_DATABASE_URL,
  },
});
