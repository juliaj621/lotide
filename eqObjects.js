// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1key = Object.keys(object1);
  let object2key = Object.keys(object2);
  // console.log(object2key)
  // console.log(object2key)
  if (object1key.length !== object2key.length) {
    // console.log("returning becus length is not equal");
    return false;
  }
  for (const value of object1key) {
    // console.log(Array.isArray(object1[value]))
    // console.log(Array.isArray(object2[value]))
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (! eqArrays(object1[value], object2[value])) {
        // console.log('returning becus eqArrays is false');
        return false;
      }
    } else {
      if (object1[value] !== object2[value]) {
        // console.log(object1[value])
        // console.log(object2[value])
  
        // console.log('false becus val 1 and 2 not equal', value);
        return false;
      }
    }
  }
  return true;
};

// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;