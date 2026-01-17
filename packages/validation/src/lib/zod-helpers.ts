import { z } from "zod";

/**
 * Type helper to convert nullable types to optional types
 * Transforms T | null to T | undefined at the type level
 */
type NullToUndefined<T> = T extends null ? undefined : T extends object ? { [K in keyof T]: NullToUndefined<T[K]> } : T;

/**
 * Recursively transforms all null values to undefined in an object.
 * Useful for converting Prisma output (which uses null) to TypeScript/UI conventions (which prefer undefined).
 *
 * @example
 * const output = nullToUndefined({ name: "John", email: null });
 * // Result: { name: "John", email: undefined }
 */
export function nullToUndefined<T>(obj: T): NullToUndefined<T> {
  if (obj === null) return undefined as NullToUndefined<T>;
  if (typeof obj !== "object") return obj as NullToUndefined<T>;
  if (Array.isArray(obj)) return obj.map(nullToUndefined) as NullToUndefined<T>;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value === null ? undefined : value;
  }
  return result as NullToUndefined<T>;
}

/**
 * Recursively transforms all undefined values to null in an object.
 * Useful for converting UI/TypeScript input (which uses undefined) to Prisma format (which expects null).
 *
 * @example
 * const input = undefinedToNull({ name: "John", email: undefined });
 * // Result: { name: "John", email: null }
 */
export function undefinedToNull<T>(obj: T): T {
  if (obj === undefined) return null as T;
  if (typeof obj !== "object" || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(undefinedToNull) as T;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value === undefined ? null : value;
  }
  return result as T;
}

/**
 * Wraps a Zod schema to automatically transform null → undefined in the output.
 * Use this for output/response schemas to make them more TypeScript/UI friendly.
 * Properly updates TypeScript types to reflect the transformation.
 *
 * @example
 * const todoOutputSchema = withNullAsUndefined(TodoSchema);
 * // All null values in the output will become undefined
 * // TypeScript types will show string | undefined instead of string | null
 */
export function withNullAsUndefined<T extends z.ZodTypeAny>(schema: T) {
  // In Zod v4, .transform() returns a ZodPipe, and TypeScript will infer the correct output type
  return schema.transform((data) => nullToUndefined(data));
}

/**
 * Wraps a Zod schema to automatically transform undefined → null in the input.
 * Use this for input schemas to make them compatible with Prisma's nullable fields.
 *
 * @example
 * const createTodoSchema = withUndefinedAsNull(
 *   TodoCreateInputSchema.omit({ createdAt: true })
 * );
 * // All undefined values in the input will become null for Prisma
 */
export function withUndefinedAsNull<T extends z.ZodTypeAny>(schema: T) {
  return z.preprocess((data) => undefinedToNull(data), schema);
}

/**
 * Type helper to transform Prisma output types (with null) to TypeScript/UI types (with undefined).
 * Use this to define output types that match the runtime transformation from withNullAsUndefined.
 *
 * @example
 * // Instead of manually defining:
 * // type TodoOutput = { id: number; title: string; description: string | undefined; ... }
 *
 * // Use this helper:
 * type TodoOutput = NullToUndefinedType<z.infer<typeof TodoSchema>>;
 */
export type NullToUndefinedType<T> = T extends null
  ? undefined
  : T extends Date | RegExp
    ? T // Don't transform built-in types
    : T extends (...args: never[]) => unknown
      ? T // Don't transform functions
      : T extends Array<infer U>
        ? Array<NullToUndefinedType<U>> // Handle arrays
        : T extends object
          ? { [K in keyof T]: NullToUndefinedType<T[K]> }
          : T;
