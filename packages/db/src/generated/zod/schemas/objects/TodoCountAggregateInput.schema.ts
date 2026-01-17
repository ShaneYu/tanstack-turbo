import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  completed: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TodoCountAggregateInputObjectSchema: z.ZodType<Prisma.TodoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoCountAggregateInputType>;
export const TodoCountAggregateInputObjectZodSchema = makeSchema();
