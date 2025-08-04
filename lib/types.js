import { ReadStream, WriteStream } from "node:fs"
export { ReadStream, WriteStream }

export const { Segmenter } = Intl

export const { constructor: AsyncFunction          } = async function()  {}
export const { constructor: AsyncGeneratorFunction } = async function*() {}
export const { constructor: GeneratorFunction      } = function*() {}
export const Generator = function*() {}()
export const AsyncGenerator = async function*() {}()

export const Arguments = function() { return arguments }()

export class Class {}
export class ExtendedClass extends Class {}

export const types = {
  undefined,
  null: null,
  Boolean,
  String,
  Number,
  BigInt,
  Infinity,
  NaN,
  Math,
  Symbol,
  Segmenter,
  Date,
  RegExp,
  URL,
  Buffer,
  ReadStream,
  WriteStream,
  Uint8Array,
  Array,
  Set,
  WeakSet,
  WeakMap,
  Map,
  Iterator,
  Object,
  Proxy,
  JSON,
  Arguments,
  Function,
  AsyncFunction,
  Promise,
  GeneratorFunction,
  Generator,
  AsyncGeneratorFunction,
  AsyncGenerator,
  Class,
  ExtendedClass,
}

export const tags = Object.keys(types)
