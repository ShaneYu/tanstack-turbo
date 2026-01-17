import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoCreateInputObjectSchema as TodoCreateInputObjectSchema } from './objects/TodoCreateInput.schema';
import { TodoUncheckedCreateInputObjectSchema as TodoUncheckedCreateInputObjectSchema } from './objects/TodoUncheckedCreateInput.schema';

export const TodoCreateOneSchema: z.ZodType<Prisma.TodoCreateArgs> = z.object({ select: TodoSelectObjectSchema.optional(),  data: z.union([TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TodoCreateArgs>;

export const TodoCreateOneZodSchema = z.object({ select: TodoSelectObjectSchema.optional(),  data: z.union([TodoCreateInputObjectSchema, TodoUncheckedCreateInputObjectSchema]) }).strict();