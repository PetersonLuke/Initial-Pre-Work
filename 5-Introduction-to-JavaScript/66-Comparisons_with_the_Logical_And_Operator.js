/*
    Luke Peterson
    8/21/2019
    
    Using the logical "and" operator (&&) to see if a value is greater than or equal to a number, and less than or equal to a number.
*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);