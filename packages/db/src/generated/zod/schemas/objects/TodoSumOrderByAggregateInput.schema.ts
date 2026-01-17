import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const TodoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoSumOrderByAggregateInput>;
export const TodoSumOrderByAggregateInputObjectZodSchema = makeSchema();
