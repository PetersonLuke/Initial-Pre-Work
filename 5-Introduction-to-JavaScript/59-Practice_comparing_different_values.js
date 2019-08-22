/*
    Luke Peterson
    8/21/2019
    
    Checking to see if val is strictly equal by using ===, it must be the same type, so an int number is not the same as a string here.  If it is "Equal is returned, if not "Not Equal is returned.
*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");