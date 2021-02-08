const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("are the parameters equal", () => {
  it('returns true if "cat" and "cat" are identical', () => {
    assert.strictEqual(assertEqual("cat", "cat"));
  });
  it('returns true if 27 and 27 are identical', () => {
    assert.strictEqual(assertEqual(27, 27));
  });
});