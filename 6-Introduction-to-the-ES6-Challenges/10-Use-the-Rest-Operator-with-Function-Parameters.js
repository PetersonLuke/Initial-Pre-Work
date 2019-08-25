/*
    Luke Peterson
    8/24/2019
    
    Added the rest operator to the function sum.  This allows the function to work the same with any amount of parameters.
*/

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6