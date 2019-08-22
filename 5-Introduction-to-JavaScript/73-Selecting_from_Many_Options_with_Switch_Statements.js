/*
    Luke Peterson
    8/21/2019
    
    Created a switch statement that can check for a value of 1 up to 4.  The statement will stop running when it finds the first value that fits and will set the variable answer to the appropriate string.
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer ="beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);