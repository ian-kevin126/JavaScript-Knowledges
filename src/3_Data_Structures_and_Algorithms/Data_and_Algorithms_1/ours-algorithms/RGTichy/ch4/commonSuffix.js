function commonSuffix(arr) {
  function reverseArray(rev) {

    var tmp = 0;
    var i = 0;
    while (i < (rev.length/2) ) {
      tmp = rev[i];
      rev[i] = rev[rev.length-i-1];
      rev[rev.length-i-1] = tmp;
      i++;
    }
    return(rev);
  }

  var l = Number.MAX_VALUE;

  for (var i = 0; i< arr.length; i++) {
    if (l > arr[i].length) {
      l = arr[i].length;
    }
    var tmp = arr[i];
    tmp = tmp.split("");
    tmp = reverseArray(tmp);
    arr[i] = tmp;
  }

  var suffix=[];
  for (var i = 0; i<l; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[j][i] !== arr[0][i]) {
        break;
      }
    }
    if(j==arr.length) {
      suffix.push(arr[0][i]);
    }
  }
  suffix = reverseArray(suffix);
  suffix=suffix.join("");
  return(suffix);
}

array=["nice","ice","baby"];
console.log(commonSuffix(array))
array=["react","tact","enact"];
console.log(commonSuffix(array))
array=["deforestation","incarceration","conviction","citation"];
console.log(commonSuffix(array))
