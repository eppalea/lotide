const eqArrays = function(array1, array2) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objOne, objTwo) {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) { //comparing that both parameters have the same number of key/value pairs
    // console.log(Object.keys(objOne).length)
    // console.log(Object.keys(objTwo).length)
    return false;
  }
  for (const key in objOne) {
    // console.log("the key is: ", key);
    if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) { // checking if the values are arrays. will return truthy/falsey
      // console.log(Array.isArray(objOne[key]));
      // console.log(Array.isArray(objTwo[key]));
      if (!eqArrays(objOne[key], objTwo[key])) {// if the arrays are not equal
        return false;
      }
    } else { //if the values are not arrays
      if (objOne[key] !== objTwo[key]) { //compare the values of the keys
        return false;
      }
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({a: '1', b: 2 }, { b: 2, a: '3' });


