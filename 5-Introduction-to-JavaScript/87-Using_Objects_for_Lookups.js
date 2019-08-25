/*
    Luke Peterson
    8/22/2019
    
    Created an object to allow looking up a list of the phonetic alphabet.
*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 var phonetic = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = phonetic[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");