// Type.
import { UnionToIntersection } from "./union-to-intersection.type";
// ChatGPT.
/**
 * @description
 * @export
 * @typedef {InstanceIntersection}
 * @template {any[]} T
 */
export type InstanceIntersection<T extends any[]> = UnionToIntersection<
  InstanceType<T[number]>
>;