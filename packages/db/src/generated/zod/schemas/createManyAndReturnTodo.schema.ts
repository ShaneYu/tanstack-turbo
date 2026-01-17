import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './objects/TodoSelect.schema';
import { TodoCreateManyInputObjectSchema as TodoCreateManyInputObjectSchema } from './objects/TodoCreateManyInput.schema';

export const TodoCreateManyAndReturnSchema: z.ZodType<Prisma.TodoCreateManyAndReturnArgs> = z.object({ select: TodoSelectObjectSchema.optional(), data: z.union([ TodoCreateManyInputObjectSchema, z.array(TodoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TodoCreateManyAndReturnArgs>;

export const TodoCreateManyAndReturnZodSchema = z.object({ select: TodoSelectObjectSchema.optional(), data: z.union([ TodoCreateManyInputObjectSchema, z.array(TodoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();