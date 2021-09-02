function getDigits(st){
  var int = 0;
  for (var i=0; i<st.length; i++) {
    if (st[i]>=0 && st[i]<=9) {
      int = 10 * int + (1 * st[i]);
    }
  }
  return(int);
}
console.log(getDigits("zsx5A4fr67"))
