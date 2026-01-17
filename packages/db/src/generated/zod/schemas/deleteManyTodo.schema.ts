import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';

export const TodoDeleteManySchema: z.ZodType<Prisma.TodoDeleteManyArgs> = z.object({ where: TodoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoDeleteManyArgs>;

export const TodoDeleteManyZodSchema = z.object({ where: TodoWhereInputObjectSchema.optional() }).strict();