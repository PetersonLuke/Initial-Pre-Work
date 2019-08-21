/*
    Luke Peterson
    8/20/2019
    
    Returned the value of the result, after concatenated on the values of the parameters of the function wordBlanks to the string result.  WordBlanks was given 4 different words that were needed to be implemented in a sentence using the parameters.
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result = "A " + myNoun + " is " + myAdjective + " but it " + myVerb + " of " + myAdverb;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");