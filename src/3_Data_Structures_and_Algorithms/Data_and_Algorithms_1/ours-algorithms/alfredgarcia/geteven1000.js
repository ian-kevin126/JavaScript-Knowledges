function get_even_numbers() {
  var sum = 0;
  for(var i = 1; i<1001;i++){
    if(i % 2 === 0){
      sum += i;
    }
  }
  return sum;
}
