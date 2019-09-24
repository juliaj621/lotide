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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log(results)
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;