import * as z from 'zod';
import type { Prisma } from '../../../client/client';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './TodoSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TodoSelectObjectSchema).optional()
}).strict();
export const TodoArgsObjectSchema = makeSchema();
export const TodoArgsObjectZodSchema = makeSchema();
