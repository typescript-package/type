import { Constructor } from "./constructor.type";
import { ExtractInstanceFromKey } from "./extract-instance-from-key.type";
import { UnionToIntersection } from "./union-to-intersection.type";
/**
 * @description If there is an intersection of multiple constructors, the type picks an instance from the property `Key` of each constructor in the intersection.
 * @export
 * @typedef {InstanceIntersectionFromKey}
 * @template T
 * @template {PropertyKey} Key
 */
export type InstanceIntersectionFromKey<T, Key extends PropertyKey> = UnionToIntersection<T extends Constructor<any>
  ? ExtractInstanceFromKey<InstanceType<T>, Key>
  : never
>;