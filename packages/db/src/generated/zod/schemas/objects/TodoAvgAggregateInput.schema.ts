import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const TodoAvgAggregateInputObjectSchema: z.ZodType<Prisma.TodoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoAvgAggregateInputType>;
export const TodoAvgAggregateInputObjectZodSchema = makeSchema();
