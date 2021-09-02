function sum_odd_5000() {
  var sum = 0;

  for(var i=1;i<=5000;i++)
  {
    sum += i;
  }
  return sum;
}
console.log(sum_odd_5000());
