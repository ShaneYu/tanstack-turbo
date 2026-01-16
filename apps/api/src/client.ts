import { hc } from "hono/client";
import type { AppType } from "./app";

const client = hc<AppType>("");

export type Client = typeof client;
export const createClient = (...args: Parameters<typeof hc>): Client => hc<AppType>(...args);
