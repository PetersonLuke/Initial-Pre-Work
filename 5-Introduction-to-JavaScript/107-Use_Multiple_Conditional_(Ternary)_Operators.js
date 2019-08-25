/*
    Luke Peterson
    8/23/2019
    
    Using conditional ternary operator checking to see if the values of the given number is positive, negative, or zero.
*/

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);