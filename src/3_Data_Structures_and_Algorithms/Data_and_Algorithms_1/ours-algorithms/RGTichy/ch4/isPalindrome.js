function isPalindrome(arr) {
  var j = arr.length - 1;
  var m = Math.floor(j/2)+1;
  var i=0;
  while ( i <= m ) {
    if (arr[i] != arr[j]) {
      return(false);
    }
    i++;
    j--;
  }
  return(true);
}
console.log(isPalindrome("AABBAA"))
console.log(isPalindrome("AABcBAA"))
console.log(isPalindrome("AAdBBAA"))
console.log(isPalindrome("AABbAA"))
