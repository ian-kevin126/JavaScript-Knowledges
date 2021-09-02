function dropTheMike(inputString) {
  var mike = inputString.indexOf("Mike");
  // Mike drop...
  if ( mike !== -1) {
    return("stunned silence");
  }
  // Trim leading spaces
  var inputArray=inputString.split("");
  var i = 0;
  while (inputArray[i] == " ") {
    i++;
  }
  if (i !== 0) {
    inputString=inputString.substring(i);
  }
  //Trim trailing spaces
  var i = inputArray.length-1;
  while (inputArray[i] == " ") {
    i--;
  }
  if (i !== inputArray.length-1) {
    inputString=inputString.substring(0,inputString.length-inputArray.length+i+1);
  }
  // Break the array into pieces on split(" "), capitalize every
  // word and then put it back together with join(" ")
  var inputArray = inputString.split(" ");
  for (var i=0; i<inputArray.length;i++) {
    var word = inputArray[i];
    var word2=word.charAt(0);
    inputArray[i] = (word.charAt(0)).toUpperCase()+word.substring(1);
  }
  inputString=inputArray.join(" ");
  return(inputString)
}
var Astring= "     Carrie talked to Mike about a   house.    ";
console.log(dropTheMike(Astring));
