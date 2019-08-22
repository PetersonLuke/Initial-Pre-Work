/*
    Luke Peterson
    8/21/2019
    
    Used else if statements to allow for multiple checks.  If the first is not met the program will move onto the next else if
*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);