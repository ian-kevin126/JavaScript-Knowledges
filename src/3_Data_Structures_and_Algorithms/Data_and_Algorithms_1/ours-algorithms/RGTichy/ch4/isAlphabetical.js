function isAlphabetical(word) {
  var array = word.split("");
  var a = true;
  for (var i = 0; i<array.length; i++) {
    if (array[i] > array[i+1]) {
      a = false;
    }
  }
  return(a);
}
var w="act"
console.log(isAlphabetical(w))
var w="bat"
console.log(isAlphabetical(w))
var w="hot"
console.log(isAlphabetical(w))
