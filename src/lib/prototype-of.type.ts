/**
 * @description Utility type to extract the prototype of a class
 * @export
 * @typedef {PrototypeOf}
 * @template T
 */
export type PrototypeOf<T> = T extends { prototype: infer P } ? P : never;
