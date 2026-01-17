import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const TodoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoAvgOrderByAggregateInput>;
export const TodoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
