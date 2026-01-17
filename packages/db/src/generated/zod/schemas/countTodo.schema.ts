import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCountAggregateInputObjectSchema as TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';

export const TodoCountSchema: z.ZodType<Prisma.TodoCountArgs> = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoCountArgs>;

export const TodoCountZodSchema = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional() }).strict();