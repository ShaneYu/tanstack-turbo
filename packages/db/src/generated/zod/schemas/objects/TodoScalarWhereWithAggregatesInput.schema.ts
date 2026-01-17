import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const todoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  completed: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TodoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput> = todoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput>;
export const TodoScalarWhereWithAggregatesInputObjectZodSchema = todoscalarwherewithaggregatesinputSchema;
