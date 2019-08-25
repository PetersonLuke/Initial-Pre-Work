/*
    Luke Peterson
    8/22/2019
    
    Created a card counter that checks to see if you should continue betting.  If count is positive keep going, but if it is a negative value stop.
*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  
  if(count > 0) {
    return count + " Bet";
  }else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');