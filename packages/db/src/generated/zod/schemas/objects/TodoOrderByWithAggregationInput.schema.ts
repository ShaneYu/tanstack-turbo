import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TodoCountOrderByAggregateInputObjectSchema as TodoCountOrderByAggregateInputObjectSchema } from './TodoCountOrderByAggregateInput.schema';
import { TodoAvgOrderByAggregateInputObjectSchema as TodoAvgOrderByAggregateInputObjectSchema } from './TodoAvgOrderByAggregateInput.schema';
import { TodoMaxOrderByAggregateInputObjectSchema as TodoMaxOrderByAggregateInputObjectSchema } from './TodoMaxOrderByAggregateInput.schema';
import { TodoMinOrderByAggregateInputObjectSchema as TodoMinOrderByAggregateInputObjectSchema } from './TodoMinOrderByAggregateInput.schema';
import { TodoSumOrderByAggregateInputObjectSchema as TodoSumOrderByAggregateInputObjectSchema } from './TodoSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TodoCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TodoAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TodoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TodoMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TodoSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TodoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByWithAggregationInput>;
export const TodoOrderByWithAggregationInputObjectZodSchema = makeSchema();
