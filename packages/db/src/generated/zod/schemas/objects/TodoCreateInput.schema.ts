import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TodoCreateInputObjectSchema: z.ZodType<Prisma.TodoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateInput>;
export const TodoCreateInputObjectZodSchema = makeSchema();
