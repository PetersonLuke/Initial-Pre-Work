/*
    Luke Peterson
    8/22/2019
    
    Checking to see if the object given exists.  If the object is there, it will return its value.  If it is not there, it will say it is not found.
*/

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  
  if(myObj.hasOwnProperty(checkProp))
  {
    return myObj[checkProp];
  }else{
  return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");