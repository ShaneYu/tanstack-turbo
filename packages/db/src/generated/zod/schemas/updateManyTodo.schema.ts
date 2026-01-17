import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './objects/TodoUpdateManyMutationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';

export const TodoUpdateManySchema: z.ZodType<Prisma.TodoUpdateManyArgs> = z.object({ data: TodoUpdateManyMutationInputObjectSchema, where: TodoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoUpdateManyArgs>;

export const TodoUpdateManyZodSchema = z.object({ data: TodoUpdateManyMutationInputObjectSchema, where: TodoWhereInputObjectSchema.optional() }).strict();