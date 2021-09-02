function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}
function removeEvenLengthStrings(str) {
  //loop thru the array str
  for (var i = 0; i<str.length; i++) {
    //take an element
    word = str[i];
    word = word.split("");
    if (word.length % 2 == 0) {
      removeAt(str,i);
      i--;
    }
  }
}
array1=['String','xxx','XXXX','XXXXXX','Words','Qwerty'];
removeEvenLengthStrings(array1);
console.log(array1)
