/*
    Luke Peterson
    8/21/2019
    
    Checking to see if the value is greater than a given value using the greater than operator (>).
*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);