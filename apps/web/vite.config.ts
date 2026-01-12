import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Packages that need to be externalized to prevent WASM corruption during production build
const prismaExternals = ["@prisma/client", "@prisma/adapter-pg", /^@prisma\/client\/runtime\/.*/];

export default defineConfig(({ command }) => ({
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    // Externalize native Node.js packages that cannot be bundled
    external: ["pg", "pg-native", "pg-pool"],
  },
  plugins: [
    devtools(),
    tanstackStart(),
    // https://tanstack.com/start/latest/docs/framework/react/guide/hosting
    nitro({
      rollupConfig: {
        // Only externalize Prisma packages during build to prevent WASM corruption
        external:
          command === "build" ? ["pg", "pg-native", "pg-pool", ...prismaExternals] : ["pg", "pg-native", "pg-pool"],
      },
    }),
    viteReact({
      // https://react.dev/learn/react-compiler
      babel: {
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              target: "19",
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
}));
