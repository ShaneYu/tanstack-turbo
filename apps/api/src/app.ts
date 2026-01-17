import { Hono } from "hono/tiny";
import todo from "./routes/todo";

export const app = new Hono().route("/todo", todo);

export type AppType = typeof app;
