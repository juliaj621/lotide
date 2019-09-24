const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
};

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

const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    // newString += ((string[i]) + "" )
    if (Array.isArray(arr[i]) === false) {
      output.push(arr[i]);
    } else {
      output = output.concat(arr[i]);
    }
  }
  return output;
};


// Test
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;