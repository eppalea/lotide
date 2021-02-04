const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objOne, objTwo) {
  let objOneKeys = Object.keys(objOne); // outputs [a, b]
  let objTwoKeys = Object.keys(objTwo);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  } 
  for (const key of objOneKeys) { //looping thru objOne and returning the keys as values in an array
  //console.log(key);
    if (objOne[key] === objTwo[key]) {//the key is reading the value of 1
      return true;
    } else {
      return false;
    }
  }
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);