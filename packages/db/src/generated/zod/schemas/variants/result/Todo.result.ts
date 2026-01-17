import * as z from 'zod';
// prettier-ignore
export const TodoResultSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TodoResultType = z.infer<typeof TodoResultSchema>;
