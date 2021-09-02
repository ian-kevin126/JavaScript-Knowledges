function validateParens(str) {
  var p = 0;
  var len = str.length-1;
  var i = 0;
  var arr = str.split("");
  while (i <= len) {
    if (arr[i] == '(') {
      p++;
    }
    if (arr[i] == ')') {
      p--;
    }
    if (p < 0) {
      return(false);
    }
    i++;
  }
  if (p == 0) {
    return(true);
  }
  else {
    return(false);
  }
}
console.log(validateParens('(765*))(+45sa))'))
console.log(validateParens('(765*(+45sa))'))
