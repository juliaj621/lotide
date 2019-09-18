const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
};

const middle = function(array) {
  let output = []
  let index = Math.floor(array.length/2)
  if (array.length <= 2) {
    return output
  }
  else if (array.length % 2 === 0) {
      output.push(array[(index)-1])
      output.push(array[(index)]) 
  }
  else {
    output.push(array[index])
  }
  return output
}

// TEST CASES
assertArraysEqual((middle([1])), [])// => []
assertArraysEqual((middle([1, 2])), []) // => []
assertArraysEqual((middle([1, 2, 3])), [2]) // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]) // => [3]
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]) // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]) // => [3, 4]