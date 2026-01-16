import honoBuild from "@hono/vite-build/node";
import honoDevServer from "@hono/vite-dev-server";
import { baseConfig } from "@repo/vitest-config/base";
import { defineConfig, mergeConfig } from "vite";

const serverConfig = defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    honoBuild({
      entry: "./src/server.ts",
    }),
    honoDevServer({
      entry: "./src/server.ts",
    }),
  ],
});

export default mergeConfig(baseConfig, serverConfig);
