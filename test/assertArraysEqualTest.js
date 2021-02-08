const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('comparing arrays', () => {
  it("returns true if ", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});