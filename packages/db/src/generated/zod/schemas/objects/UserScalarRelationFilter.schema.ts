import * as z from 'zod';
import type { Prisma } from '../../../client/client';


const makeSchema = () => z.object({
  
}).strict();
export const UserScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserScalarRelationFilter>;
export const UserScalarRelationFilterObjectZodSchema = makeSchema();
