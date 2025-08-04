Reliable [Type]
===============
Reliable runtime [type] information.

## Install
~~~ sh
pnpm install reliable-type
~~~

Example
-------
The provided `type` method is more reliable than some combination of [`typeof`]
and [`instanceof`]. While the [`.constructor`] `Object` property is strong
—and recommended, in absence of a dependency like this—it can technically be
reassigned. It will always `return` the correct type as an informative,
specific Type or [`tag`] `String`. Extra [type]s are also available to `import`:
~~~ js
import assert from "node:assert/strict"
import { type, types, tag, tags } from "reliable-type"
import { GeneratorFunction } from "reliable-type/types"

function* generator() { yield * [1, 2, 3] }

const Type = type(generator)
const Tag  =  tag(generator)

assert.equal(Type, GeneratorFunction)
assert.equal(Tag, "GeneratorFunction")

assert.equal(Type, types.GeneratorFunction)
assert.equal(Tag,   tags.GeneratorFunction)
~~~

| Expression                                 | [`type`][type]             | [`tag`]                    |
|:-------------------------------------------|:---------------------------|:---------------------------|
| `undefined`                                | `undefined`                | `"undefined"`              |
| `null`                                     | `null`                     | `"null"`                   |
| `true`/`false`                             | `Boolean`                  | `"Boolean"`                |
| `"string"`                                 | `String`                   | `"String"`                 |
| `-0`/`1_000`/`0.1`                         | [`Number`]                 | `"Number"`                 | 
| [`0xAf`]/[`0o1`]/[`0b1`]                   | `Number`                   | `"Number"`                 |
| [`3.1415e+1`]/[`Math.PI`][`Math`]          | `Number`                   | `"Number"`                 |
| `1_000_000n`                               | [`BigInt`]                 | `"BigInt"`                 | 
| [`-`]`Infinity`                            | `Infinity`                 | `"Infinity"`               | 
| [`NaN`]                                    | `NaN`                      | `"NaN"`                    |
| [`Math`]                                   | `Math`                     | `"Math"`                   |
| `Symbol("*")`                              | [`Symbol`]                 | `"Symbol"`                 |
| `new Intl.Segmenter()`                     | [`Segmenter`]              | `"Segmenter"`              |
| `new Date()`                               | `Date`                     | `"Date"`                   |
| `/.*/g`/`new RegExp(".*")`                 | `RegExp`                   | `"RegExp"`                 |
| `new URL("https://github.com")`            | `URL`                      | `"URL"`                    |
| `const buffer = Buffer.from("data")`       | [`Buffer`]                 | `"Buffer"`                 |
| `fs.createReadStream(buffer)`              | [`ReadStream`]             | `"ReadStream"`             |
| `fs.createWriteStream("/dev/null")`        | [`WriteStream`]            | `"WriteStream"`            |
| `new Uint8Array([0, 255])`                 | [`Uint8Array`]             | `"Uint8Array"`             |
| `[1 ,2 ,3]`/`Array.from("abc")`            | `Array`                    | `"Array"`                  |
| `new Set([1, 2, 3])`                       | [`Set`]                    | `"Set"`                    |
| `new WeakSet()`                            | [`WeakSet`]                | `"WeakSet"`                |
| `new WeakMap()`                            | [`WeakMap`]                | `"WeakMap"`                |
| `const map = new Map().set("a", 1)`        | [`Map`]                    | `"Map"`                    |
| `map.entries()`                            | [`Iterator`]               | `"Iterator"`               |
| `const object = { a: 1, b: 2 }`            | `Object`                   | `"Object"`                 |
| `new Proxy(object, {})`                    | [`Proxy`]                  | `"Proxy"`                  |
| `Proxy.revocable(object, {})`              | `Proxy`                    | `"Proxy"`                  |
| `{ [Symbol.toStringTag]: "tag" }`          | `"tag"`                    | [`"tag"`][`tag`]           |
| [`JSON`]                                   | `JSON`                     | `"JSON"`                   |
| `function() { return arguments }(1, 2)`    | [`Arguments`]              | `"Arguments"`              |
| `[].reduce`/`() => {}`                     | `Function`                 | `"Function"`               |
| `async () => Promise.resolve(true)`        | [`AsyncFunction`]          | `"AsyncFunction"`          |
| `Promise.resolve(true)`                    | [`Promise`]                | `"Promise"`                |
| `function* generator() { yield * [1, 2] }` | [`GeneratorFunction`]      | `"GeneratorFunction"`      |
| `generator()`                              | [`Generator`]              | `"Generator"`              |
| `async function* gen() { yield * [1, 2] }` | [`AsyncGeneratorFunction`] | `"AsyncGeneratorFunction"` |
| `gen()`                                    | [`AsyncGenerator`]         | `"AsyncGenerator"`         |
| `new (class Class {})()`                   | `Class`                    | [`"Class"`]                |
| `new (class Extended extends Class {})()`  | `ExtendedClass`            | [`"ExtendedClass"`]        | 
| `fs.opendir(dir)`                          | [`Dir`]                    | `"Dir"`                    |
| `fs.readdir(dir, { withFileTypes: true })` | [`Dirent`]                 | `"Dirent"`                 |

### Aliases
~~~ js
import { typeOf, toStringTag } from "reliable-type"
~~~

License
-------
[MIT] © [Daniel Bayley]

[MIT]:                        LICENSE.md
[Daniel Bayley]:              https://github.com/danielbayley

[type]:                       https://developer.mozilla.org/docs/Web/JavaScript/Guide/Grammar_and_types#data_types
[`typeof`]:                   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof
[`instanceof`]:               https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/instanceof
[`.constructor`]:             https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

[`Number`]:                   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[`0xAf`]:                     https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#hexadecimal_numbers
[`0o1`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#octal_numbers
[`0b1`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#binary_numbers
[`3.1415e+1`]:                https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#exponentiation
[`BigInt`]:                   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[`NaN`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN
[`Math`]:                     https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math

[`Symbol`]:                   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[`tag`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
[`JSON`]:                     https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON
[`Segmenter`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter

[`Buffer`]:                   https://nodejs.org/api/buffer.html
[`ReadStream`]:               https://nodejs.org/api/fs.html#class-fsreadstream
[`WriteStream`]:              https://nodejs.org/api/fs.html#class-fswritestream
[`Uint8Array`]:               https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[`Set`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set
[`WeakSet`]:                  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
[`WeakMap`]:                  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[`Map`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map
[`Iterator`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Iterator
[`Proxy`]:                    https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy

[`Arguments`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/arguments
[`AsyncFunction`]:            https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
[`Promise`]:                  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
[`GeneratorFunction`]:        https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*
[`Generator`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator
[`AsyncGeneratorFunction`]:   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
[`AsyncGenerator`]:           https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator

[`"Class"`]:                  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
[`"ExtendedClass"`]:          https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/extends

[`Dir`]:                      https://nodejs.org/api/fs.html#class-fsdir
[`Dirent`]:                   https://nodejs.org/api/fs.html#class-fsdirent
