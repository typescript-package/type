 /**
  * @description Represents a callback function with parameters, the `value` that has been checked, the `result` of this check, and an optional
  * `payload`.
  * @param result The check result of a `boolean` type of the given `value`.
  * @param value The value of the generic type variable Value to check and which the given check `result` applies.
  * @param payload An optional `object` of a generic type variable `Payload` to provide more data.
  * @export
  * @typedef {ResultCallback}
  * @template [Value=any] A generic type variable `Value` determines `value` parameter type, by default `any`.
  * @template [Payload=object] Generic type variable `Payload` indicates `payload` parameter type, by default `object`.
  * @returns The return value is a `boolean` indicating the check result of the given `value`.
  */
 export type ResultCallback<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  payload?: Payload
) => boolean;
