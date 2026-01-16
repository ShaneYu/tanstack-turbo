import { Hono } from "hono/tiny";

const app = new Hono().get("/", (ctx) => ctx.json({ message: "Hello World!" }));

export default app;
