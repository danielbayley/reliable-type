import assert from "node:assert/strict"
import { describe, it } from "node:test"

describe("suite `1`", () => {
  it("test `1` pass", () => assert.equal(true, true))
  it("test `2` fail", () => assert.equal(true, false))
  it.skip("test `3` skip", () => assert.equal(true, false))
  it.todo("test `4` todo", () => assert.equal(true, true))

  describe("nested suite `2`", () => {
    it("test `5` pass", () => assert.equal(true, true))
    it("test `6` fail", () => assert.equal(true, false))
    it.todo("test `7` todo", () => assert.equal(true, false))

    describe("nested suite `3`", () => {
      it("test `8` pass", () => assert.equal(true, true))
    })
  })
})

describe("suite `4`", () =>
  it("test `9` pass", () => assert.equal(true, true)))
