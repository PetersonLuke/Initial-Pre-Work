/*
    Luke Peterson
    8/21/2019
    
    Created a switch statement that has a default value that will be used if none of the case's parameters are met.
*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val)
  {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);
