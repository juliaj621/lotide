const middle = function(array) {
  let output = [];
  let index = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return output;
  } else if (array.length % 2 === 0) {
    output.push(array[(index) - 1]);
    output.push(array[(index)]);
  } else {
    output.push(array[index]);
  }
  return output;
};

module.exports = middle;