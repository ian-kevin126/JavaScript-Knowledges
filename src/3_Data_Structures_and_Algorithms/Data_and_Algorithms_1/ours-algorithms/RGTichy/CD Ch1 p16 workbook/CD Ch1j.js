function fn() {
  var i=0;
  while (i<=100) {
    console.log(i);
    if( i%5==0) {
    console.log("Coding")
      if( i%10==0) {
      console.log(" Dojo")
      }
    }
    i++;
  }
}
console.log(fn())
