function fn() {
  var count =0;
  for (i=512; i <= 4096; i++) {
    if (i % 5 == 0) {
      console.log(i);
      count++;
    }
  }
  console.log("There were "+count+" mutiples of 5 in the range.")
}
console.log(fn())
