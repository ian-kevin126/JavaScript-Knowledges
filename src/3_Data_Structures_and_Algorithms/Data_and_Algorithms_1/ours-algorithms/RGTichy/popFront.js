function popFront(arr) {
  var front = arr[0];
  for (var i = 1; i<=arr.length-1; i++) {
  arr[i-1]=arr[i];
  }
  arr.pop();
  return (front);
}
array=[2,3,4,5,6,7];
console.log (popFront(array))
console.log(array)
