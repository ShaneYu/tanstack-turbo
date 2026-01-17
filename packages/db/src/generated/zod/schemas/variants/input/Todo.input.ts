import * as z from 'zod';
// prettier-ignore
export const TodoInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().optional().nullable(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TodoInputType = z.infer<typeof TodoInputSchema>;
