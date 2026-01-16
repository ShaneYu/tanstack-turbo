import { Hono } from "hono/tiny";
import goodbye from "./routes/goodbye";
import hello from "./routes/hello";

export const app = new Hono().route("/hello", hello).route("/goodbye", goodbye);

export type AppType = typeof app;
