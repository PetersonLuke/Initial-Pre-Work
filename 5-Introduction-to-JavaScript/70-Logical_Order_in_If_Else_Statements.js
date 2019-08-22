/*
    Luke Peterson
    8/21/2019
    
    Changed the order of the else if so that it will be able to work correctly.  Prior to the changes, the code would never check if it is less than 5, because it checked for 10 first.
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);