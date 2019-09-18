const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑 🛑 🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
    }
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
}

// TEST CASES
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
