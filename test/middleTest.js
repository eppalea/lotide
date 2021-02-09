const assert = require('chai').assert;
const middle = require('../middle');

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("returns the middle index of an array. if array contains even num of elements, return middle 2 indices", () => {
  it('return [] if array is [1]', () => {
    assert.deepEqual(middle([]), []);
  });
  it('return [] if array is [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('return [2] if array is [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('return [3] if array is [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('return [2, 3] if array is [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
})