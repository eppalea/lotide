
// assertEqual function is used to compare primitive values (as opposed to the assertArraysEqual function)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { //looping through the array in the function's first parameter
    //console.log(item);
    if (itemsToCount[item]) { //looks for a truthy value within the itemsToCount object, if true continue to next if statement
      if (results[item]) { //looks at the results variable, which is an object, to see if the string item from the for loop exists as a key yet
        results[item] += 1; //if the item exists as a key, 1 is added to the pair value
      } else {
        results[item] = 1; //if the item doesn't exist it creates the key/value pair, and pair is assigned a value of 1
      }
      //console.log(results);
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);