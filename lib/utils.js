import {types} from "node:util"

export const isProxyRevocable = object =>
  object?.revoke?.constructor === Function

export const isRevocableProxy = isProxyRevocable

export const isProxy = object =>
  types.isProxy(object) || isProxyRevocable(object)
