declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_BASE_URL: string;
      SERVER_AUTH_SECRET: string;
      SERVER_GITHUB_CLIENT_ID: string;
      SERVER_GITHUB_CLIENT_SECRET: string;
      SERVER_GOOGLE_CLIENT_ID: string;
      SERVER_GOOGLE_CLIENT_SECRET: string;
    }
  }
}

export {};
