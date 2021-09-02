function validatePBB(str) {
  var p = 0;
  var b = 0;
  var B = 0;
  var len = str.length-1;
  var i = 0;
  var arr = str.split("");
  while (i <= len) {
    if (arr[i] == '(') {
      p++;
    }
    if (arr[i] == '[') {
      b++;
    }if (arr[i] == '{') {
      B++;
    }
    if (arr[i] == ')') {
      p--;
    }
    if (arr[i] == ']') {
      b--;
    }
    if (arr[i] == '}') {
      B--;
    }
    if (p < 0 || b < 0 || B < 0) {
      return(false);
    }
    i++;
  }
  if (p == 0 && b == 0 && B == 0) {
    return(true);
  }
  else {
    return(false);
  }
}
console.log(validatePBB('{[](765*)[](+45sa)}}'))
console.log(validatePBB('{}[](765*(+45sa))'))
