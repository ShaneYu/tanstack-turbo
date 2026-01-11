declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_DATABASE_URL: string;
    }
  }
}

export {};
