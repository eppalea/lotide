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
  let objOneKeys = Object.keys(objOne); // loops through the object and outputs the object's key(s) as string variables in an array
  // console.log(objOneKeys);
  let objTwoKeys = Object.keys(objTwo); // loops through the object and outputs the object's key(s) as string variables in an array
  if (objOneKeys.length !== objTwoKeys.length) { //comparing that both parameters have the same number of key/value pairs by comparing the number of items in the arrays made in lines 12 & 14
    return false;
  } 
  for (const key of objOneKeys) { //looping thru the first parameter, which is an object, and returning each string variable from the array created on lines 12
  // console.log(key);
  // console.log(objOne[key]);
    if (objOne[key] !== objTwo[key]) {//comparing the key/value pairs of both object parameters. the key variable is reading the value associated with key key?? double check this
      return false;
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

