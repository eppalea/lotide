const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Eppa Lea", "Eppa Lea");
assertEqual("Cat", "Dog");
assertEqual(27, 27);
assertEqual(10, 100);