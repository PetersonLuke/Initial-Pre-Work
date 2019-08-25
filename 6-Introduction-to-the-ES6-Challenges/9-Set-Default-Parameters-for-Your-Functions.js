/*
    Luke Peterson
    8/24/2019
    
    Set a default number to value so that it will add at least 1 if "value" is not given.
*/

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6