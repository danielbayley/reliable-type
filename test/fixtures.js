import fs, {promises} from "node:fs"

export const string = "string"
export const regexp = new RegExp(".*")
export const symbol = Symbol("*")

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
export const error  = new Error(string)
export const errors = {
  eval:      new EvalError(error.message),
  range:     new RangeError(error.message),
  reference: new ReferenceError(error.message),
  syntax:    new SyntaxError(error.message),
  type:      new TypeError(error.message),
  uri:       new URIError(error.message),
  aggregate: new AggregateError([error], error.message),
}

export const segmenter = new Intl.Segmenter()
export const date      = new Date

export const integer     = 1
export const negative    = -1
export const decimal     = 1.0
export const bigint      = 2n ** 63n
export const exponential = 3.4e38

export const hex    = 0xAf
export const octal  = 0o1
export const binary = 0b1

export const url = new URL("https://github.com")

const { dirname, filename } = import.meta
export const readStream  = fs.createReadStream(filename)
export const writeStream = fs.createWriteStream("/dev/null")

export const array  = Array.from(string)
export const arrays = {}
export const buffer = Buffer.from(string)
arrays.buffer = new ArrayBuffer(1024)
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects
arrays.typed = {
  int8:         new Int8Array([-128, 127]),
  uint8:        new Uint8Array([0, 255]),
  uint8Clamped: new Uint8ClampedArray([0, 255]),
  int16:        new Int16Array([-32768, 32767]),
  uint16:       new Uint16Array([0, 65535]),
  int32:        new Int32Array([-2147483648, 2147483647]),
  uint32:       new Uint32Array([0, 4294967295]),
  float32:      new Float32Array([-exponential, exponential]),
  float64:      new Float64Array([-1.8e308, 1.8e308]),
  bigInt64:     new BigInt64Array([-bigint, bigint]),
  bigUint64:    new BigUint64Array([0n, bigint]),
}

export const set     = new Set(array)
export const weakSet = new WeakSet()
weakSet.add(array)

export const object = {...string }
const entries = Object.entries(object)

export const map     = new Map(entries)
export const weakMap = new WeakMap()
weakMap.set(object, true)

export const iterator = map.entries()

export const proxy = new Proxy(object, {})
export const proxyRevocable  = Proxy.revocable(object, {})
export const argumentsObject = function() { return arguments }(...array)
export const taggedObject    = { [Symbol.toStringTag]: "CustomType" }

export const promise = Promise.resolve(true)
export const asyncFunction = async () => promise

export function* generatorFunction() { return yield * array }
export const generator = generatorFunction()

export async function* asyncGeneratorFunction() { return yield * array }
export const asyncGenerator = asyncGeneratorFunction()

export const  dir     = await promises.opendir(dirname)
export const [dirent] = await promises.readdir(dirname, { withFileTypes: true })
await dir.close()
