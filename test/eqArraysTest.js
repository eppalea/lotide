const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("if two array are equal, return true", () => {
  it('return true if [1, 2, 3] is equal to [1, 2, 3]', () => {
      assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
});