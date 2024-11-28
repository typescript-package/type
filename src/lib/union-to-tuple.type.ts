// Type.
import { UnionToIntersection } from "./union-to-intersection.type";
/**
 * @description
 * @export
 * @typedef {UnionToTuple}
 * @template U
 * @template [Last=LastInUnion<U>]
 */
export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last];

/**
 * @description
 * @export
 * @typedef {LastInUnion}
 * @template U
 */
export type LastInUnion<U> = UnionToIntersection<U extends any ? (x: U) => 0 : never> extends (x: infer L) => 0 
  ? L 
  : never;