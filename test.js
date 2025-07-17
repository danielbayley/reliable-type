import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { type } from "reliable-type"

const string   = "string"
const {length} = string
const array    = Array.from({length}, (_, i) => i + 1)
const object   = Object.assign({length})
const entries  = Object.entries(object)
const promise  = Promise.resolve(true)

describe("`type`", () => {
  it("should `return` the correct `type` for primitive values", () => {
    assert.equal("null",      type(null))
    assert.equal("undefined", type(undefined))
    assert.equal("Boolean",   type(true))
    assert.equal("Boolean",   type(false))
    assert.equal("String",    type(string))
    assert.equal("String",    type(""))
    assert.equal("Number",    type(-0))
    assert.equal("Number",    type(2))
    assert.equal("Number",    type(0.1))
    assert.equal("Number",    type(0xAf))
    assert.equal("Number",    type(0o1))
    assert.equal("Number",    type(0b1))
    assert.equal("BigInt",    type(0n))
    assert.equal("BigInt",    type(1_000_000n))
    assert.equal("Number",    type(Math.PI))
    assert.equal("Number",    type(3.1415e+1))
    assert.equal("Infinity",  type(-Infinity))
    assert.equal("NaN",       type(NaN))
    assert.equal("NaN",       type(0 / 0))
    assert.equal("Symbol",    type(Symbol("*")))
  })

  it("should `return` the correct respective `type` for `Object`s", () => {
    assert.equal("Array",      type([]))
    assert.equal("Array",      type(array))
    assert.equal("Array",      type(Array.from(string)))
    assert.equal("Uint8Array", type(new Uint8Array(array)))
    assert.equal("Set",        type(new Set(array)))
    assert.equal("WeakSet",    type(new WeakSet()))
    assert.equal("WeakMap",    type(new WeakMap()))
    assert.equal("Map",        type(new Map(entries)))
    assert.equal("Object",     type(object))
    assert.equal("Object",     type({}))
  })

  it("should `return` the name of built-in globals, and tagged `Object`s", () => {
    assert.equal("JSON", type(JSON))
    assert.equal("Math", type(Math))
    assert.equal("tag",  type({ [Symbol.toStringTag]: "tag" }))
  })

  it("should `return` the correct respective type for other `Object`s", () => {
    assert.equal("RegExp",    type(new RegExp(".*")))
    assert.equal("RegExp",    type(/.*/g))
    assert.equal("Segmenter", type(new Intl.Segmenter()))
    assert.equal("URL",       type(new URL("https://github.com")))
    assert.equal("Buffer",    type(Buffer.from(string)))
    assert.equal("Date",      type(new Date))
  })

  it("should `return` the correct respective type for `function`s", () => {
    assert.equal("Promise",                type(promise))
    assert.equal("Arguments",              type((function() { return arguments })()))

    assert.equal("Function",               type(() => {}))
    assert.equal("Function",               type(function() {}))
    assert.equal("Function",               type([].reduce))
    assert.equal("AsyncFunction",          type(async () => await promise))

    assert.equal("GeneratorFunction",      type (function*() { return yield * array }))
    assert.equal("Generator",              type((function*() { return yield * array })()))
    assert.equal("AsyncGeneratorFunction", type (async function*() { return yield * await array }))
    assert.equal("AsyncGenerator",         type((async function*() { return yield * await array })()))
  })

  it("should `return` the name of `Class`es", () => {
    class Class {}
    assert.equal("Class",    type(new Class))
    assert.equal("Extended", type(new class Extended extends Class {}))
  })
})
