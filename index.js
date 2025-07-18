import {isProxy} from "#utils"
import {types} from "#types"
export {types}

export const toStringTag = tag
export function tag(value) {
  if (value == null) return String(value)

  const {constructor} = value ?? {}
  const {name} = constructor  ?? {}

  if (constructor === URL) return "URL"

  const string = name && String(constructor)
  if (string?.includes("extends")) return "ExtendedClass"
  if (string?.startsWith("class")) return "Class"

  const tag = Reflect.apply(Object.prototype.toString, value, [])
  switch (name) {
    case "Number":
      return Number.isNaN(value) ? "NaN" : Number.isFinite(value) ? name : "Infinity"
    case "Object":
    case "": return isProxy(value) ? "Proxy" : tag.slice(8, -1)
    default: return name
  }
}

export const type = value => tag(value) in types ? types[tag(value)] : tag(value)
export const typeOf = type
export default type
