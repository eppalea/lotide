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


const map = function(array, callback) {
  //temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item[0]); // each word
    // console.log('item AFTER: ', callback(item)); //first letter of each word
    results.push(callback(item));
  }
  console.log(results);
  return results;
};

// const words = ["beach", "summer", "friends", "sun", "sand"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, ["beach", "summer", "friends", "sun", "sand"]);

const array1 = ['12', '23', '34'];
const results1 = map(array1, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['1', '2', '3']);

// const array2 = ['1', '2', '3'];
// const results1 = map(array2, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, ['1', '2', '3']);

// const names = [];
// const results1 = map(names, word => word[0]);
// console.log(names);
// assertArraysEqual(results1, []);