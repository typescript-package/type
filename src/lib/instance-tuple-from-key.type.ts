// Type.
import { Constructor } from "./constructor.type";
import { ExtractInstanceFromKey } from "./extract-instance-from-key.type";
import { UnionToTuple } from "./union-to-tuple.type";
/**
 * @description
 * @export
 * @typedef {InstanceTupleFromKey}
 * @template {readonly Constructor<any>[]} T
 */
export type InstanceTupleFromKey<T extends readonly Constructor<any>[], Key extends PropertyKey> = Readonly<UnionToTuple<
  {
    [K in keyof T]: T[K] extends Constructor<any>
      ? ExtractInstanceFromKey<InstanceType<T[K]>, Key>
      : never;
  }[number]
>>;
