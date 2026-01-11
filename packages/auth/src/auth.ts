import { db } from "@repo/db";
import { createServerOnlyFn } from "@tanstack/react-start";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth/minimal";
import { tanstackStartCookies } from "better-auth/tanstack-start";

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

const getAuthConfig = createServerOnlyFn(() =>
  betterAuth({
    baseURL: process.env.VITE_BASE_URL,
    secret: process.env.SERVER_AUTH_SECRET,
    telemetry: {
      enabled: false,
    },
    database: prismaAdapter(db, {
      provider: "postgresql",
    }),

    // https://www.better-auth.com/docs/integrations/tanstack#usage-tips
    plugins: [tanstackStartCookies()],

    // https://www.better-auth.com/docs/concepts/session-management#session-caching
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60, // 5 minutes
      },
    },

    // https://www.better-auth.com/docs/concepts/oauth
    socialProviders: {
      github: {
        clientId: requireEnv("SERVER_GITHUB_CLIENT_ID"),
        clientSecret: requireEnv("SERVER_GITHUB_CLIENT_SECRET"),
      },
      google: {
        clientId: requireEnv("SERVER_GOOGLE_CLIENT_ID"),
        clientSecret: requireEnv("SERVER_GOOGLE_CLIENT_SECRET"),
      },
    },

    // https://www.better-auth.com/docs/authentication/email-password
    emailAndPassword: {
      enabled: true,
    },

    experimental: {
      // https://www.better-auth.com/docs/adapters/prisma#joins-experimental
      joins: true,
    },
  }),
);

export const auth = getAuthConfig();
