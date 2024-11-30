/**
 * @description A `boolean` type or an instance of a `Boolean`.
 * @export
 * @typedef {AnyBoolean}
 */
export type AnyBoolean = Exclude<boolean | Boolean, true | false>;
