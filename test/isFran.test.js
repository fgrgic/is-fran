const assert = require("assert");
const isFran = require("../index");

describe("Test random true examples", () => {
  it("fran", () => {
    assert.strictEqual(isFran("fran"), true);
  });
  it("f r a n ", () => {
    assert.strictEqual(isFran("f r a n "), true);
  });
  it("Fran", () => {
    assert.strictEqual(isFran("Fran"), true);
  });
  it("FRAN", () => {
    assert.strictEqual(isFran("FRAN"), true);
  });
  it("awesome", () => {
    assert.strictEqual(isFran("awesome"), true);
  });
  it("zagreb", () => {
    assert.strictEqual(isFran("zagreb"), true);
  });
});

describe("Test random false examples", () => {
  it("john", () => {
    assert.strictEqual(isFran("john"), false);
  });
  it("null", () => {
    assert.strictEqual(isFran(null), false);
  });
  it("undefined", () => {
    assert.strictEqual(isFran(), false);
  });
  it("342", () => {
    assert.strictEqual(isFran(342), false);
  });
  it("-1", () => {
    assert.strictEqual(isFran(-1), false);
  });
  it("0", () => {
    assert.strictEqual(isFran(0), false);
  });
});
