// Type.
import { Constructor } from "./constructor.type";
/**
 * @description Utility type to convert a tuple of constructors to an intersection of instance types
 * @export
 * @typedef {IntersectionOfInstances}
 * @template {Constructor<C>[]} T
 * @template [C={}]
 */
export type IntersectionOfInstances<T extends Constructor<C>[], C = {}> = 
  T extends Array<infer U> 
    ? (U extends Constructor<C> ? InstanceType<U> : never)
    : never;
