import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoCreateManyInputObjectSchema as TodoCreateManyInputObjectSchema } from './objects/TodoCreateManyInput.schema';

export const TodoCreateManySchema: z.ZodType<Prisma.TodoCreateManyArgs> = z.object({ data: z.union([ TodoCreateManyInputObjectSchema, z.array(TodoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TodoCreateManyArgs>;

export const TodoCreateManyZodSchema = z.object({ data: z.union([ TodoCreateManyInputObjectSchema, z.array(TodoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();