const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function(toCount) {
  let newToCount = (toCount.split(' ').join(''));
  let output = {};
  for (let letter of newToCount) {
    if (output[letter]) {
        output[letter] += 1;
    } 
    else {
        output[letter] = 1;
    }
  }
  // console.log(output)
  return output
}

// TEST CASES
assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("julia jachimowicz").j, 2);