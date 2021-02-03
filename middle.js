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

// this function is to double check that we didn't change our source array
const assertArraysEqual = function(actual, expected) { //function parameters from line 22
  if (eqArrays(actual, expected)) { //function parameters passed from line 13
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual(eqArrays[1, 2, 3], [1, 2, 3], true);

const middle = function(array) {
  let middleElement = [];
  //[] -> []
  //[1] -> []
  //[1, 2] -> []
  //[1, 2, 3] -> [2]
  //[1, 2, 3, 4] -> [2, 3]
  if (array.length <= 2) {
    return middleElement;
  } else if (array.length % 2 === 0) {
    //return middle two elements
    let middleIndex = array.length / 2;
    middleElement.push(array[middleIndex - 1]);
    middleElement.push(array[middleIndex]);
  } else {
    //return the middle element
    let middleIndex = Math.floor(array.length / 2);
    // console.log(middleIndex);
    middleElement.push(array[middleIndex]);
  }
  return middleElement;
};

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3, 4, 5, 46, 12, 100, 99]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);