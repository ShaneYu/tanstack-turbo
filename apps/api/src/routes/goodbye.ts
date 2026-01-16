import { Hono } from "hono/tiny";

const app = new Hono().get("/", (ctx) => ctx.json({ message: "Goodbye World!" }));

export default app;
