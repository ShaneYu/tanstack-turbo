import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  completed: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const TodoSelectObjectSchema: z.ZodType<Prisma.TodoSelect> = makeSchema() as unknown as z.ZodType<Prisma.TodoSelect>;
export const TodoSelectObjectZodSchema = makeSchema();
