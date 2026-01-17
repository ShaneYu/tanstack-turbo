import type { Prisma } from '../../client/client';
import * as z from 'zod';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoCountAggregateInputObjectSchema as TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';
import { TodoMinAggregateInputObjectSchema as TodoMinAggregateInputObjectSchema } from './objects/TodoMinAggregateInput.schema';
import { TodoMaxAggregateInputObjectSchema as TodoMaxAggregateInputObjectSchema } from './objects/TodoMaxAggregateInput.schema';
import { TodoAvgAggregateInputObjectSchema as TodoAvgAggregateInputObjectSchema } from './objects/TodoAvgAggregateInput.schema';
import { TodoSumAggregateInputObjectSchema as TodoSumAggregateInputObjectSchema } from './objects/TodoSumAggregateInput.schema';

export const TodoAggregateSchema: z.ZodType<Prisma.TodoAggregateArgs> = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional(), _avg: TodoAvgAggregateInputObjectSchema.optional(), _sum: TodoSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoAggregateArgs>;

export const TodoAggregateZodSchema = z.object({ orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional(), _avg: TodoAvgAggregateInputObjectSchema.optional(), _sum: TodoSumAggregateInputObjectSchema.optional() }).strict();