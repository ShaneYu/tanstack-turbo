import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const todowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  completed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TodoWhereInputObjectSchema: z.ZodType<Prisma.TodoWhereInput> = todowhereinputSchema as unknown as z.ZodType<Prisma.TodoWhereInput>;
export const TodoWhereInputObjectZodSchema = todowhereinputSchema;
