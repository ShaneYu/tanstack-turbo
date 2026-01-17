import { zValidator } from "@hono/zod-validator";
import { db } from "@repo/db";
import {
  createTodoInputSchema,
  type TodoOutput,
  todoIdParamSchema,
  todoOutputSchema,
  updateTodoInputSchema,
} from "@repo/validation/todo";
import { Hono } from "hono/tiny";

const app = new Hono()
  .get("/:id", zValidator("param", todoIdParamSchema), async (ctx) => {
    const { id } = ctx.req.valid("param");
    const todo = await db.todo.findUnique({ where: { id } });

    if (!todo) {
      return ctx.notFound();
    }

    // Parse transforms null → undefined at runtime
    // Type assertion ensures TypeScript knows the correct type
    const output = todoOutputSchema.parse(todo) as TodoOutput;

    return ctx.json(output);
  })
  .get("/", async (ctx) => {
    const allTodos = await db.todo.findMany();

    // Transform each todo: null → undefined
    const output = allTodos.map((todo) => todoOutputSchema.parse(todo) as TodoOutput);

    return ctx.json(output);
  })
  .post("/", zValidator("json", createTodoInputSchema), async (ctx) => {
    const todoInput = ctx.req.valid("json");
    const todo = await db.todo.create({ data: todoInput });
    const output = todoOutputSchema.parse(todo) as TodoOutput;

    return ctx.json(output, 201);
  })
  .put("/:id", zValidator("param", todoIdParamSchema), zValidator("json", updateTodoInputSchema), async (ctx) => {
    const { id } = ctx.req.valid("param");
    const todoData = ctx.req.valid("json");
    const updatedTodo = await db.todo.update({ where: { id }, data: todoData });
    const output = todoOutputSchema.parse(updatedTodo) as TodoOutput;

    return ctx.json(output);
  });

export default app;
