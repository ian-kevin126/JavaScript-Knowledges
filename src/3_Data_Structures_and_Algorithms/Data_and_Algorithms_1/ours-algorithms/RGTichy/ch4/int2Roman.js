function rep(num,str1,str2,str3) {
  switch (num) {
    case 1:
      return(str1);
    case 2:
      return(str1+str1);
    case 3:
      return(str1+str1+str1);
    case 4:
      return(str1+str2);
    case 5:
      return(str2);
    case 6:
      return(str2+str1);
    case 7:
      return(str2+str1+str1);
    case 8:
      return(str2+str1+str1+str1);
    case 9:
      return(str1+str3);

  }
}
function int2Roman(int) {
  var sets=['IVX','XLC','CDM','MYZ']
  var roman = "";
  var r = [];
  if (int < 4000) {
    for (var i = 0; i<=3; i++) {
      l=int % 10;
      if (l != 0) {
        str=sets[i].split("");
        r[i] = rep(l,str[0],str[1],str[2]);
      }
      int = int - l;
      int=int/10;
    }
    for (var i = 3; i>=0;i--) {
      if (r[i] != undefined) {
        roman=roman+r[i];
      }
    }
  }
  return(roman);
}
var num=3447;
numeral = int2Roman(num);
console.log(numeral)
