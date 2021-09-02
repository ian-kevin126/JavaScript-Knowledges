function iterArr(arr) {
  var sum = arr[0];
  for(var i=1 ;i<arr.length;i++)
  {
    sum += arr[i];
  }
  return sum;
}

console.log(iterArr([1,2,5]));
