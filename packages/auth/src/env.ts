import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    /**
     * The better-auth secret used for signing cookies etc.
     * Only accessible on the server, not on the client.
     */
    SERVER_AUTH_SECRET: z.string(),

    /**
     * The GitHub client ID.
     * Only accessible on the server, not on the client.
     */
    SERVER_GITHUB_CLIENT_ID: z.string(),

    /**
     * The GitHub client secret.
     * Only accessible on the server, not on the client.
     */
    SERVER_GITHUB_CLIENT_SECRET: z.string(),

    /**
     * The Google client ID.
     * Only accessible on the server, not on the client.
     */
    SERVER_GOOGLE_CLIENT_ID: z.string(),

    /**
     * The Google client secret.
     * Only accessible on the server, not on the client.
     */
    SERVER_GOOGLE_CLIENT_SECRET: z.string(),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "VITE_",

  client: {
    /**
     * The base URL of the server.
     * Available on the client and server.
     */
    VITE_BASE_URL: z.url(),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
