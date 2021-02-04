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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //console.log(sentence[i]); //loops through each letter of the sentence
    if (sentence[i] !== " ") { //if the letter is not a space, continue to next if statement
      if (results[sentence[i]]) { //if the results object has the letter of the for loop as a key, proceed to next if statement
        results[sentence[i]].push(i); //push the index of the letter into the array of the value for that key
      } else {
        results[sentence[i]] = []; //create a key for the letter, as well as, create an array within the value
        results[sentence[i]].push(i); //push the index of the letter into the array of the value for that key
      }
      // console.log(results);
    }
  }
  return results;
};

console.log(letterPositions(("hello")));
console.log(letterPositions("eppa lea turniawan"));

assertArraysEqual(letterPositions("hello").e, [1]);