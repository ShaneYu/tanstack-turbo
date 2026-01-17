import * as z from 'zod';
export const TodoUpdateManyResultSchema = z.object({
  count: z.number()
});