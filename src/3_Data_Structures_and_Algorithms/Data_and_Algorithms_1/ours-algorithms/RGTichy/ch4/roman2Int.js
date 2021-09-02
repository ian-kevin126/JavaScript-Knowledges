function roman2Int(roman) {
  var array=roman.split("");
  var last_val = 0;
  var sum = 0;
  for (var i=array.length-1; i>=0; i--) {
    if (array[i]=="I"||array[i]=="i") {
      value=1;
    }
    if (array[i]=="V"||array[i]=="v") {
      value=5;
    }
    if (array[i]=="X"||array[i]=="x") {
      value=10;
    }
    if (array[i]=="L"||array[i]=="l") {
      value=50;
    }
    if (array[i]=="C"||array[i]=="c") {
      value=100;
    }
    if (array[i]=="D"||array[i]=="d") {
      value=500;
    }
    if (array[i]=="M"||array[i]=="m") {
      value=1000;
    }
    if (last_val > value) {
      sum = sum -value;
    }
    else {
      sum = sum + value;
    }
    last_val = value;
  }
  return(sum)
}
console.log(roman2Int('MMMCDXLVII'))
