const middle = function(array) {
  let middleElement = [];
  //[] -> []
  //[1] -> []
  //[1, 2] -> []
  //[1, 2, 3] -> [2]
  //[1, 2, 3, 4] -> [2, 3]
  if (array.length <= 2) {
    return middleElement;
  } else if (array.length % 2 === 0) {
    //return middle two elements
    let middleIndex = array.length / 2;
    middleElement.push(array[middleIndex - 1]);
    middleElement.push(array[middleIndex]);
  } else {
    //return the middle element
    let middleIndex = Math.floor(array.length / 2);
    // console.log(middleIndex);
    middleElement.push(array[middleIndex]);
  }
  return middleElement;
};

// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(middle([1, 2, 3, 4, 5, 46, 12, 100, 99]));

module.exports = middle;