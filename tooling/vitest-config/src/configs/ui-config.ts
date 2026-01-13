import { defineConfig, mergeConfig } from "vitest/config";
import { baseConfig } from "./base-config.js";

export const uiConfig = mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
    },
  }),
);
