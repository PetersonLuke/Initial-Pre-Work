/*
    Luke Peterson
    8/24/2019
    
    Used high order functions, filter(), and map() and used with an arrow function to square the values given in an array.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((num) =>  num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);