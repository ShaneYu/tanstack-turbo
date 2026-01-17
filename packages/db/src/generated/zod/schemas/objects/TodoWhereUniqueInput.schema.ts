import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const TodoWhereUniqueInputObjectSchema: z.ZodType<Prisma.TodoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoWhereUniqueInput>;
export const TodoWhereUniqueInputObjectZodSchema = makeSchema();
