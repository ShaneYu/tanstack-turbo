import { db } from "@repo/db";
import { createServerOnlyFn } from "@tanstack/react-start";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth/minimal";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { env } from "./env";

const getAuthConfig = createServerOnlyFn(() =>
  betterAuth({
    baseURL: env.VITE_BASE_URL,
    secret: env.SERVER_AUTH_SECRET,
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
        clientId: env.SERVER_GITHUB_CLIENT_ID,
        clientSecret: env.SERVER_GITHUB_CLIENT_SECRET,
      },
      google: {
        clientId: env.SERVER_GOOGLE_CLIENT_ID,
        clientSecret: env.SERVER_GOOGLE_CLIENT_SECRET,
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
