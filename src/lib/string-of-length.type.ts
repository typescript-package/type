// Interface.
import { MinMax } from './min-max.interface';
// Type.
import { AnyString } from './any-string.type';
/**
 * @description A `string` type or an instance of `String` of length between a specified range takes generic type variable `Min` and `Max` constrained by
 * `number` type as length, and takes generic type variable `Type` constrained by generic type `AnyString` as the type.
 * @export
 * @typedef {StringOfLength}
 * @template {number} Min
 * @template {number} Max
 * @template {AnyString} [Type=string]
 */
export type StringOfLength<
  Min extends number,
  Max extends number,
  Type extends AnyString = string
> = Type & MinMax<Min, Max>;
