import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const TodoSumAggregateInputObjectSchema: z.ZodType<Prisma.TodoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoSumAggregateInputType>;
export const TodoSumAggregateInputObjectZodSchema = makeSchema();
