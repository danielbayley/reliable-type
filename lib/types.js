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
  Array,
  Uint8Array,
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
