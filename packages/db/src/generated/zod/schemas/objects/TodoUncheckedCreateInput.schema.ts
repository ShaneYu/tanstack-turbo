import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TodoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateInput>;
export const TodoUncheckedCreateInputObjectZodSchema = makeSchema();
