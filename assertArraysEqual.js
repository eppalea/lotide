const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) { //function parameters from line 23
  if (eqArrays(actual, expected)) { //function parameters passed from line 13
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;
