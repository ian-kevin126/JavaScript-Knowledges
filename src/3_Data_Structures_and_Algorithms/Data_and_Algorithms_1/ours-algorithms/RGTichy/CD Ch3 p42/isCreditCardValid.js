function isCreditCardValid(cardNumber) {
  var cardNumberArray=[];
  if (typeof(cardNumber) == "number") {
    //Throw it into a string format
    var tmp = cardNumber.toString()
    cardNumber = tmp;
  }
  if (typeof(cardNumber) == "string") {
    for (i = 0; i < cardNumber.length; i++) {
      cardNumberArray[i]= Number(cardNumber.charAt(i));
    }
  }
  else {
    if (typeof(cardNumber) == 'object') {
      // just move the point to point to the same array as cardNumber
      cardNumberArray = cardNumber;
      }
      else {
        //return with a false answer, we don't know what datatype was even sent
        return(false);
      }
    }
  // Have the cardNumberArray, now
  // If it is more than 19 postions or less than 13 positions, return(false)
  // if (cardNumberArray.length < 13 | cardNumberArray.length > 19) {
  //   return(false);
  // }
  var cC=cardNumberArray;
  var last = Number(cC.pop());
  var counter = 1;
  var sum = 0;
  for (i=cC.length-1; i>=0; i--) {
    //take the odd positions and double them
    if (counter % 2 == 1) {
      cC[i]=cC[i]*2;
      if (cC[i]>9) {cC[i]=cC[i]-9;}
    }
    sum = sum + cC[i];
    counter++;
  }
  sum = sum + last;
  if (sum % 10 != 0) {
    return(false);}
  else {
    return(true);}
}
console.log (isCreditCardValid(52282))
