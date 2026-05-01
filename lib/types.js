import { Dir, Dirent, ReadStream, WriteStream } from "node:fs"
export { Dir, Dirent, ReadStream, WriteStream }

export const { Segmenter } = Intl

export const { constructor: AsyncFunction          } = async function()  {}
export const { constructor: AsyncGeneratorFunction } = async function*() {}
export const { constructor: GeneratorFunction      } = function*() {}
export const Generator = function*() {}()
export const AsyncGenerator = async function*() {}()

export const Arguments = function() { return arguments }()

export class Class {}
export class ExtendedClass extends Class {}

delete Error.stackTraceLimit

delete URL.parse
delete URL.canParse
delete URL.createObjectURL
delete URL.revokeObjectURL

delete Buffer.poolSize
delete Buffer.from
delete Buffer.copyBytesFrom
delete Buffer.of
delete Buffer.alloc
delete Buffer.allocUnsafe
delete Buffer.allocUnsafeSlow
delete Buffer.isBuffer
delete Buffer.compare
delete Buffer.isEncoding
delete Buffer.concat
delete Buffer.byteLength
const symbol = Object.getOwnPropertySymbols(Buffer).at(-1)
delete Buffer[symbol]

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
  Error,
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
  Dir,
  Dirent,
}

export const tags = Object.keys(types)
