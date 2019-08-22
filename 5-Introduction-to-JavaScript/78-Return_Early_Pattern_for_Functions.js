/*
    Luke Peterson
    8/21/2019
    
    Check to see if a or b is less than 0 if so the program will return undefined.  If it is greater it will not run the return in the if statement.
*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  
  if(a < 0 || b < 0)
  {
    return undefined;
  }
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);