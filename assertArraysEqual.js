const eqArrays = function(array1, array2) { //function parameters passed from line 14
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) { //function parameters from line 23
  if (eqArrays(actual, expected)) { //function parameters passed from line 13
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


//assertArraysEqual(eqArrays[1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
