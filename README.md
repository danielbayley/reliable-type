Reliable [Type]
===============
Reliable runtime [type] information.

## Install
~~~ sh
pnpm install reliable-type
~~~

Usage
-----
The provided `type` method is more reliable than some combination of [`typeof`]
and [`instanceof`]. While the [`.constructor`] `Object` property is strong—and
recommended, in absence of a dependency like this, or custom `function`—it can
technically be reassigned. This `type` method will always `return` the correct
type as an informative, specific `String`:
~~~ js
import {type} from "reliable-type"

type(function* generator() { yield * [1, 2, 3] }) // "GeneratorFunction"
~~~

Examples
------------------------------------------------------------------------------
| Expression                                  | [Type]                       |
|:--------------------------------------------|:-----------------------------|
| `null`                                      | `"null"`                     |
| `undefined`                                 | `"undefined"`                |
| `true`/`false`                              | `"Boolean"`                  |
| `"string"`                                  | `"String"`                   |
| `-0`/`1_000`/`0.1`                          | [`"Number"`]                 |
| [`0xAf`]/[`0o1`]/[`0b1`]                    | `"Number"`                   |
| [`3.1415e+1`]/[`Math.PI`][`Math`]           | `"Number"`                   |
| `1_000_000n`                                | [`"BigInt"`]                 |
| [`-`]`Infinity`                             | `"Infinity"`                 |
| [`NaN`]                                     | `"NaN"`                      |
| [`Math`]                                    | `"Math"`                     |
| `Symbol("*")`                               | [`"Symbol"`]                 |
| `new Intl.Segmenter()`                      | [`"Segmenter"`]              |
| `new Date()`                                | `"Date"`                     |
| `/.*/g`/`new RegExp(".*")`                  | `"RegExp"`                   |
| `new URL("https://github.com")`             | `"URL"`                      |
| `Buffer.from("data")`                       | [`"Buffer"`]                 |
| `[1 ,2 ,3]`/`Array.from("abc")`             | `"Array"`                    |
| `new Uint8Array([0, 255])`                  | [`"Uint8Array"`]             |
| `new Set([1, 2, 3])`                        | [`"Set"`]                    |
| `new WeakSet()`                             | [`"WeakSet"`]                |
| `new WeakMap()`                             | [`"WeakMap"`]                |
| `new Map().set("a", 1)`                     | [`"Map"`]                    |
| `{ a: 1, b: 2 }`                            | `"Object"`                   |
| `new Proxy({}, { a: 1, b: 2 })`             | [`"Object"`]                 |
| `{ [Symbol.toStringTag]: "tag" }`           | [`"tag"`]                    |
| `JSON`                                      | `"JSON"`                     |
| `function() { return arguments }(1, 2)`     | [`"Arguments"`]              |
| `[].reduce`/`() => {}`                      | `"Function"`                 |
| `async () => Promise.resolve(true)`         | [`"AsyncFunction"`]          |
| `Promise.resolve(true)`                     | [`"Promise"`]                |
| `function* generator() { yield * [1, 2] }`  | [`"GeneratorFunction"`]      |
| `generator()`                               | [`"Generator"`]              |
| `async function* gen() { yield * [1, 2] }`  | [`"AsyncGeneratorFunction"`] |
| `gen()`                                     | [`"AsyncGenerator"`]         |
| `new (class Class {})()`                    | [`"Class"`]                  |
| `new (class Extended extends Class {})()`   | [`"Extended"`]               | 

License
-------
[MIT] © [Daniel Bayley]

[MIT]:                        LICENSE.md
[Daniel Bayley]:              https://github.com/danielbayley

[type]:                       https://developer.mozilla.org/docs/Web/JavaScript/Guide/Grammar_and_types#data_types
[`typeof`]:                   https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof
[`instanceof`]:               https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/instanceof
[`.constructor`]:             https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

[`"Number"`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[`0xAf`]:                     https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#hexadecimal_numbers
[`0o1`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#octal_numbers
[`0b1`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#binary_numbers
[`3.1415e+1`]:                https://developer.mozilla.org/docs/Web/JavaScript/Guide/Numbers_and_dates#exponentiation
[`"BigInt"`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[`NaN`]:                      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN
[`Math`]:                     https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math

[`"Symbol"`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[`"tag"`]:                    https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
[`"Segmenter"`]:              https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter

[`"Buffer"`]:                 https://nodejs.org/api/buffer.html
[`"Uint8Array"`]:             https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
[`"Set"`]:                    https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set
[`"WeakSet"`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
[`"WeakMap"`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[`"Map"`]:                    https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map
[`"Object"`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy

[`"Arguments"`]:              https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/arguments
[`"AsyncFunction"`]:          https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
[`"Promise"`]:                https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
[`"GeneratorFunction"`]:      https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*
[`"Generator"`]:              https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator
[`"AsyncGeneratorFunction"`]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
[`"AsyncGenerator"`]:         https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator

[`"Class"`]:                  https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes
[`"Extended"`]:               https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/extends
