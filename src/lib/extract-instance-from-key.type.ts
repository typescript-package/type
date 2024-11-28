// Type.
import { Constructor } from "./constructor.type";
/**
 * @description
 * @export
 * @typedef {ExtractInstanceFromKey}
 * @template T
 * @template {PropertyKey} Key
 */
export type ExtractInstanceFromKey<T, Key extends PropertyKey> = T extends { [K in Key]: readonly (infer E)[] }
  ? E extends Constructor<any>
    ? InstanceType<E>
    : never
  : never;