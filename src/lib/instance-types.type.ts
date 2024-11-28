// Type.
import { Constructor } from './constructor.type';
/**
 * @description
 * @export
 * @typedef {InstanceTypes}
 * @template {readonly Constructor<any>[]} T
 */
export type InstanceTypes<T extends readonly Constructor<any>[]> = T extends readonly [infer First, ...infer Rest]
  ? (First extends Constructor<any> ? InstanceType<First> : never) & InstanceTypes<Rest extends Constructor<any>[] ? Rest : []>
  : {};
