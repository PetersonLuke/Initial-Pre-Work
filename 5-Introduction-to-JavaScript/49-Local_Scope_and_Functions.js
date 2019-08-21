/*
    Luke Peterson
    8/20/2019
    
    Created a local variable inside a function.  This variable can only be accessed in the function.
*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();