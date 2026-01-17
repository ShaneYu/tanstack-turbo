import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TodoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByWithRelationInput>;
export const TodoOrderByWithRelationInputObjectZodSchema = makeSchema();
