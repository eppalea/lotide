const tail = function(array) {
  if (array === [0]) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;