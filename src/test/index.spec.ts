import {
  AnyBoolean,
  AnyNumber,
  AnyString,
  CallbackPayload,
} from '../lib';

const anyBoolean: AnyBoolean = false;
const anyNumber: AnyNumber = 27;
const anyString: AnyString = '27';
const func = (age: number, callbackPayload: CallbackPayload<{name: string}>) => callbackPayload;
const result = func(47, {'action': 'test', 'id': 27, 'name': 'firstname', 'param': 'age'});
