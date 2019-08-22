/*
    Luke Peterson
    8/21/2019
    
    Created an if statement that returns a string based on if the function is true or false.
*/

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  
  if(wasThatTrue) 
  {
      return "Yes, that was true";
  }

  return "No, that was false";
  
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);