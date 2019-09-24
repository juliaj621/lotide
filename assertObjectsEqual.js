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

const eqObjects = function(object1, object2) {
  let object1key = Object.keys(object1);
  let object2key = Object.keys(object2);
  if (object1key.length !== object2key.length) {
    return false;
  }
  for (const value of object1key) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (! eqArrays(object1[value], object2[value])) {
        return false;
      }
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    return console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};


// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false

module.exports = assertObjectsEqual;