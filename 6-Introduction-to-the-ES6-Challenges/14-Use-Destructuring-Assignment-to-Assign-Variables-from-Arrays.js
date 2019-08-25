/*
    Luke Peterson
    8/24/2019
    
    Swapped the values of the arrays "a" and "b" by using destructuring assignment.
*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8