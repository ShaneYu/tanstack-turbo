import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  completed: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TodoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoMaxOrderByAggregateInput>;
export const TodoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
