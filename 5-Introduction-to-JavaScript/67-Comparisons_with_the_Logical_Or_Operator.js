/*
    Luke Peterson
    8/21/2019
    
    Using the logical "or" operator (||) to see if a value is greater than a number, or less than or equal to a number.
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);