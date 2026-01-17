import * as z from 'zod';

export const TodoSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullish(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TodoType = z.infer<typeof TodoSchema>;
