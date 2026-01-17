import * as z from 'zod';
export const TodoCreateManyResultSchema = z.object({
  count: z.number()
});