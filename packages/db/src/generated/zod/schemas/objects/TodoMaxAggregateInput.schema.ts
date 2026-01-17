import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  completed: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const TodoMaxAggregateInputObjectSchema: z.ZodType<Prisma.TodoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoMaxAggregateInputType>;
export const TodoMaxAggregateInputObjectZodSchema = makeSchema();
