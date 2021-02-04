const assertEqual = function(actual, expected) { //this function is checking that I haven't changed the original parameter
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    // console.log(letter);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    // console.log(results);
    }
  }
  return results;
};

console.log(countLetters("eppa lea turniawan"));
console.log(countLetters("i might just be getting this object thing"));

const newString = "thanks riley";
countLetters(newString);
assertEqual(newString, "thanks riley"); //this function is checking that the variable on line 28 hasn't changed after running it through the function on line 29