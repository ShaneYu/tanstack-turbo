import * as z from 'zod';
// prettier-ignore
export const TodoModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TodoPureType = z.infer<typeof TodoModelSchema>;
