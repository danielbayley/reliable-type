import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { type, typeOf, tag, toStringTag, types } from "reliable-type"
import * as fixtures from "#fixtures"

const {
  string,
  regex,
  symbol,
  segmenter,
  date,
  integer,
  decimal,
  negative,
  bigint,
  exponential,
  hex,
  octal,
  binary,
  url,
  buffer,
  readStream,
  writeStream,
  uint8Array,
  array,
  set,
  weakSet,
  weakMap,
  map,
  iterator,
  object,
  proxy,
  proxyRevocable,
  argumentsObject,
  taggedObject,
  promise,
  asyncFunction,
  generatorFunction,
  generator,
  asyncGeneratorFunction,
  asyncGenerator,
  dir,
  dirent,
} = fixtures

const {
  ReadStream,
  WriteStream,
  Segmenter,
  AsyncFunction,
  AsyncGeneratorFunction,
  GeneratorFunction,
  Generator,
  AsyncGenerator,
  Arguments,
  Class,
  ExtendedClass,
  Dir,
  Dirent,
} = types

class Classy {}
class Extended extends Classy {}

describe("`type`", () => {
  it("`export`s a `typeOf` alias", () =>
    assert.equal(typeOf(true), Boolean))

  it("`return`s correct `type` for primitives", () => {
    assert.equal(null,      type(null))
    assert.equal(undefined, type(undefined))
    assert.equal(Boolean,   type(true))
    assert.equal(Boolean,   type(false))
    assert.equal(String,    type(string))
    assert.equal(String,    type(""))
    assert.equal(Number,    type(negative))
    assert.equal(Number,    type(integer))
    assert.equal(Number,    type(decimal))
    assert.equal(Number,    type(hex))
    assert.equal(Number,    type(octal))
    assert.equal(Number,    type(binary))
    assert.equal(BigInt,    type(bigint))
    assert.equal(Number,    type(Math.PI))
    assert.equal(Number,    type(exponential))
    assert.equal(Infinity,  type(-Infinity))
    assert.equal(NaN,       type(NaN))
    assert.equal(Symbol,    type(symbol))
  })

  it("`return`s correct respective `type` for `Object`s", () => {
    assert.equal(Array,      type([]))
    assert.equal(Array,      type(array))
    assert.equal(Uint8Array, type(uint8Array))
    assert.equal(Set,        type(set))
    assert.equal(WeakSet,    type(weakSet))
    assert.equal(WeakMap,    type(weakMap))
    assert.equal(Map,        type(map))
    assert.equal(Iterator,   type(iterator))
    assert.equal(Object,     type(object))
    assert.equal(Object,     type({}))
    assert.equal(Proxy,      type(proxy))
    assert.equal(Proxy,      type(proxyRevocable))
  })

  it("`return`s raw name of built-in globals", () => {
    assert.equal(JSON, type(JSON))
    assert.equal(Math, type(Math))
  })
  it("or custom `tag` for `Tag`ged `Object`s", () =>
    assert.equal("CustomType", type(taggedObject)))

  it("`return`s correct respective `type` for other `Object`s", () => {
    assert.equal(RegExp,    type(regex))
    assert.equal(Segmenter, type(segmenter))
    assert.equal(URL,       type(url))
    assert.equal(Buffer,    type(buffer))
    assert.equal(Date,      type(date))
  })

  it("`return`s correct respective `type` for streams", () => {
    assert.equal(ReadStream,  type(readStream))
    assert.equal(WriteStream, type(writeStream))
  })

  it("`return`s correct respective `type` for `function`s", () => {
    assert.equal(Promise,                type(promise))
    assert.equal(Arguments,              type(argumentsObject))

    assert.equal(Function,               type(() => {}))
    assert.equal(Function,               type(function() {}))
    assert.equal(Function,               type([].reduce))
    assert.equal(AsyncFunction,          type(asyncFunction))

    assert.equal(GeneratorFunction,      type(generatorFunction))
    assert.equal(Generator,              type(generator))
    assert.equal(AsyncGeneratorFunction, type(asyncGeneratorFunction))
    assert.equal(AsyncGenerator,         type(asyncGenerator))
  })

  it("`return`s `Class` `type` for `class`es, including `extend`ed", () => {
    assert.equal(Class,         type(new Classy))
    assert.equal(ExtendedClass, type(new Extended))
  })

  it("`return`s `Dir`/`ent`ry `type`s for directories accessed by Node", () => {
    assert.equal(Dir,    type(dir))
    assert.equal(Dirent, type(dirent))
  })
})

describe("`tag`", () => {
  it("`export`s a `toStringTag` alias", () =>
    assert.equal(toStringTag(true), "Boolean"))

  it("`return`s correct `tag` for primitives", () => {
    assert.equal("null",      tag(null))
    assert.equal("undefined", tag(undefined))
    assert.equal("Boolean",   tag(true))
    assert.equal("Boolean",   tag(false))
    assert.equal("String",    tag(string))
    assert.equal("String",    tag(""))
    assert.equal("Number",    tag(negative))
    assert.equal("Number",    tag(integer))
    assert.equal("Number",    tag(decimal))
    assert.equal("Number",    tag(hex))
    assert.equal("Number",    tag(octal))
    assert.equal("Number",    tag(binary))
    assert.equal("BigInt",    tag(bigint))
    assert.equal("Number",    tag(Math.PI))
    assert.equal("Number",    tag(exponential))
    assert.equal("Infinity",  tag(-Infinity))
    assert.equal("NaN",       tag(NaN))
    assert.equal("Symbol",    tag(symbol))
  })

  it("`return`s correct respective `tag` for `Object`s", () => {
    assert.equal("Array",      tag([]))
    assert.equal("Array",      tag(array))
    assert.equal("Uint8Array", tag(uint8Array))
    assert.equal("Set",        tag(set))
    assert.equal("WeakSet",    tag(weakSet))
    assert.equal("WeakMap",    tag(weakMap))
    assert.equal("Map",        tag(map))
    assert.equal("Iterator",   tag(iterator))
    assert.equal("Object",     tag(object))
    assert.equal("Object",     tag({}))
    assert.equal("Proxy",      tag(proxy))
    assert.equal("Proxy",      tag(proxyRevocable))
  })

  it("`return`s raw name of built-in globals", () => {
    assert.equal("JSON", tag(JSON))
    assert.equal("Math", tag(Math))
  })
  it("or custom `tag` for `Tag`ged `Object`s", () =>
    assert.equal("CustomType", tag(taggedObject)))

  it("`return`s correct respective `tag` for other `Object`s", () => {
    assert.equal("RegExp",    tag(regex))
    assert.equal("Segmenter", tag(segmenter))
    assert.equal("URL",       tag(url))
    assert.equal("Buffer",    tag(buffer))
    assert.equal("Date",      tag(date))
  })

  it("`return`s correct respective `tag` for streams", () => {
    assert.equal("ReadStream",  tag(readStream))
    assert.equal("WriteStream", tag(writeStream))
  })

  it("`return`s correct respective `tag` for `function`s", () => {
    assert.equal("Promise",                tag(promise))
    assert.equal("Arguments",              tag(argumentsObject))

    assert.equal("Function",               tag(() => {}))
    assert.equal("Function",               tag(function() {}))
    assert.equal("Function",               tag([].reduce))
    assert.equal("AsyncFunction",          tag(asyncFunction))

    assert.equal("GeneratorFunction",      tag(generatorFunction))
    assert.equal("Generator",              tag(generator))
    assert.equal("AsyncGeneratorFunction", tag(asyncGeneratorFunction))
    assert.equal("AsyncGenerator",         tag(asyncGenerator))
  })

  it("`return`s correct `tag` for `class`es, including `extend`ed", () => {
    assert.equal("Class",         tag(new Classy))
    assert.equal("ExtendedClass", tag(new Extended))
  })

  it("`return`s `Dir`/`ent`ry `tag`s for directories accessed by Node", () => {
    assert.equal("Dir",    tag(dir))
    assert.equal("Dirent", tag(dirent))
  })
})
