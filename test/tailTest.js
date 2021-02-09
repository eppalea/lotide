const tail = require('../tail');
const assert = require('chai').assert;

describe('every element except the first element of an array', () => {
  it('return ["Lighthouse", "Labs"] from the array ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});