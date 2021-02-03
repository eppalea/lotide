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
const assertArraysEqual = function(actual, expected) { //function parameters from line 21
  if (eqArrays(actual, expected)) { //function parameters passed from line 13
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual([1, 2, 3], [1, 2, 3]);

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const element of source) {
    newArray.push(element);
  }
  // console.log(newArray);
  for (let j = 0; j < newArray.length; j++) {
    for (let r = 0; r < itemsToRemove.length; r++) {
      // console.log(j);
      // console.log(r);
      if (newArray[j] === itemsToRemove[r]) {
      // console.log("item in array:", newArray[j]);
      // console.log("item to remove:", itemsToRemove);
        newArray.splice(j, 1);
      }
    }
  }
  console.log(newArray);
};

const animals = ['cat', 'dog', 'bird'];
without(animals, ['cat']);

assertArraysEqual(animals, ['cat', 'dog', 'bird']);