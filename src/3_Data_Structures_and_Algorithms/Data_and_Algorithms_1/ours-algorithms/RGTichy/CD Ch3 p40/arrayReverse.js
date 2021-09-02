function arrayReverse(arr) {
  var tmp = 0;
  var i = 0;
  while (i < (arr.length/2) ) {
    tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;
    i++;
  }
}
var array= [1,"A",3,4,5,6];
console.log (arrayReverse(array))
console.log(array)
