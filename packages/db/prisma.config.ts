import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./src/schema",
  migrations: {
    path: "./src/migrations",
    seed: "tsx src/seed.ts",
  },
  datasource: {
    url: env("SERVER_DATABASE_URL"),
  },
});
