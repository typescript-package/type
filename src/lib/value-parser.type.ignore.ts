/**
 * The type of function to convert the value of any type to generic type variable `Type`, by default equal to `string`.
 * @param value The value of `any` type to convert to the generic type variable `Type`.
 * @returns The return value is the converted value to the type of generic type variable `Type`.
 */
export type ValueParser<Type = string> = (value: any) => Type;
