const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    console.log("the key is: ", key);
    if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) { // checking if the values are arrays. will return truthy/falsey
      console.log(Array.isArray(objOne[key]));
      console.log(Array.isArray(objTwo[key]));
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



const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

