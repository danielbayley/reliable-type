import fs, {promises} from "node:fs"

export const string = "string"
export const regex  = RegExp(".*")
export const symbol = Symbol("*")

export const segmenter = new Intl.Segmenter()
export const date = new Date

export const integer     = 1
export const negative    = -1
export const decimal     = 1.0
export const bigint      = 1_000_000n
export const exponential = 3.1415e+1

export const hex    = 0xAf
export const octal  = 0o1
export const binary = 0b1

export const url    = new URL("https://github.com")
export const buffer = Buffer.from(string)

export const readStream  = fs.createReadStream(buffer)
export const writeStream = fs.createWriteStream("/dev/null")

export const uint8Array = new Uint8Array([0, 255])
export const array = Array.from(string)

export const set     = new Set(array)
export const weakSet = new WeakSet()
weakSet.add(array)

export const object = Object.assign({}, string)
const entries       = Object.entries(object)

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

export const {dirname} = import.meta
export const  dir      = await promises.opendir(dirname)
export const [dirent]  = await promises.readdir(dirname, { withFileTypes: true })
await dir.close()
