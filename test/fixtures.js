import fs, {promises} from "node:fs"

export const string = "string"
export const regex  = RegExp(".*")
export const symbol = Symbol("*")

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
export const error = Error(string)
export const evalError = EvalError(string)
export const rangeError = RangeError(string)
export const referenceError = ReferenceError(string)
export const syntaxError = SyntaxError(string)
export const typeError = TypeError(string)
export const uriError = URIError(string)
export const aggregateError = AggregateError(string)

export const segmenter = new Intl.Segmenter()
export const date = new Date

export const integer     = 1
export const negative    = -1
export const decimal     = 1.0
export const bigint      = 2n^63n
export const exponential = 3.4e38

export const hex    = 0xAf
export const octal  = 0o1
export const binary = 0b1

export const url = new URL("https://github.com")

const { dirname, filename } = import.meta
export const readStream  = fs.createReadStream(filename)
export const writeStream = fs.createWriteStream("/dev/null")

export const buffer = Buffer.from(string)
export const arrayBuffer       = new ArrayBuffer(1024)
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects
export const int8Array         = new Int8Array([-128, 127])
export const uint8Array        = new Uint8Array([0, 255])
export const uint8ClampedArray = new Uint8ClampedArray([0, 255])
export const int16Array        = new Int16Array([-32768, 32767])
export const uint16Array       = new Uint16Array([0, 65535])
export const int32Array        = new Int32Array([-2147483648, 2147483647])
export const uint32Array       = new Uint32Array([0, 4294967295])
export const float32Array      = new Float32Array([-exponential, exponential])
export const float64Array      = new Float64Array([-1.8e308, 1.8e308])
export const bigInt64Array     = new BigInt64Array([-bigint, bigint])
export const bigUint64Array    = new BigUint64Array([0n, bigint])

export const array = Array.from(string)

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
