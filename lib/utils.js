import util from "node:util/types"

export const isProxyRevocable = proxy =>
  proxy?.revoke?.constructor === Function

export const isRevocableProxy = isProxyRevocable

export const isProxy = proxy =>
  util.isProxy(proxy) || isProxyRevocable(proxy)
