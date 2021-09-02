// explodeOut takes 2 start points in an array and moves
// in opposite directions looking for matched pairs of array
// elements.  It builds the valid palindromes up and returns
// them at full length.
function explodeOut(str,left,right) {

  p$ = str;
  var palindrome = "";
  for (var i=left; i<=right; i++) {
    palindrome = palindrome + p$[i];
  }

  if ( (left-1) > 0 && (right + 1) <= str.length-1) {
    if (p$[left-1] == p$[right+1]) {
      palindrome = explodeOut(str,left-1,right+1);
    }
  }
  return(palindrome);
}

function longestPalindrome(str) {

//two ways to identify:
// a) two chars sequential as a start point
//    e.g. "ee" in "deed"
// b) two chars around another char match
//    e.g. "cec" in "racecar"
//
// Look for case a) first--

  var a$ = str.split("");
  var palindrome = "";
  // start 1 char in, end 1 char early
  for (var i= 1; i<a$.length-1; i++) {
    if (a$[i-1] == a$[i+1]) {
      var temp = explodeOut(a$,(i-1),(i+1));
      if (temp.length > palindrome.length) {
        palindrome = temp;
      }
    }
    if (a$[i-1] == a$[i]) {
      var temp = explodeOut(a$,(i-1),(i));
      if (temp.length > palindrome.length) {
        palindrome = temp;
      }
    }
  }

  return(palindrome);
}

console.log(longestPalindrome("I have a racecar at my saloon."));
