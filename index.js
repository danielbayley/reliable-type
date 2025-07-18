export default type
export function type(value) {
  if (value == null) return String(value)
  const tag = Reflect.apply(Object.prototype.toString, value, [])
  const {name} = value.constructor ?? {}
  switch (name) {
    case "Number":
      return Number.isNaN(value) ? "NaN" : Number.isFinite(value) ? name : "Infinity"
    case "Object":
    case "": return tag.slice(8, -1)
    default: return name
  }
}
export const typeOf = type
