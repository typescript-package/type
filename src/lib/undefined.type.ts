/**
 * @description A generic type `Undefined` indicates generic type variable `Type` as undefined. It takes generic type variable `Type` causing other
 * types than `undefined` its change to never.
 * @export
 * @typedef {Undefined}
 * @template Type
 */
export type Undefined<Type> = Type extends undefined ? Type : never;
