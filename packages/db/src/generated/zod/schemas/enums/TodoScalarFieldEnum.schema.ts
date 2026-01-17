import * as z from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'completed', 'createdAt', 'updatedAt'])

export type TodoScalarFieldEnum = z.infer<typeof TodoScalarFieldEnumSchema>;