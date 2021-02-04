const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let genre = '';
  for (const tvShowGenre in bestTVShowsByGenre) { //looping through each key in the obj
    const showName = bestTVShowsByGenre[tvShowGenre]; //value is equal to the key of the obj
    //console.log("Tv show genre: " + tvShowGenre + ", show name: " + showName);
    if (value === showName) { //if the value parameter is the same as the showName from the for loop
      genre = tvShowGenre; // the genre variable will be replaced with the tvShowGenre key
    } else {
      genre = undefined;
    }
  }
  return genre;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);