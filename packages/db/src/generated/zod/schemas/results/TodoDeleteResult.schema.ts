import * as z from 'zod';
export const TodoDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));