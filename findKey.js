const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const element in object) {  //loop thru every element in our object
    // console.log("element is: ", element);
    if (callback(object[element])) {//the callback function (on line 27) is pulling the value from the element object, which is another object (stars)
      // console.log(element);
      return element;
    }
  }
  return undefined;
};

let test = findKey({ //turned into a variable for easy comparison in the assertEqual function
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, element => element.stars === 2); // => "noma"

assertEqual(test, "noma");

// let test = findKey({ 
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, element => element.stars === 4); // => "noma"

// assertEqual(test, undefined);