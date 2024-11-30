import { Constructor } from './constructor.type';
import { PrimitiveNames } from './primitive-names.type';
/**
 * @description The main types as string values, besides the `Constructor` which is an instance of an Obj.
 * @export
 * @typedef {TypeNames}
 * @template Obj
 */
export type TypeNames<Obj> = Constructor<Obj> | 'function' | 'object' | PrimitiveNames;
