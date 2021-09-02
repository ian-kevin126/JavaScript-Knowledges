function minToFront(arr) {
  var tmp = 0;
  for (var i = 1; i<arr.length; i++) {
    if (arr[i]<arr[0]) {
      tmp = arr[0];
      arr[0] = arr[i];
      arr[i] = tmp;
    }
  }
}

var array= [12,"A",3,4,5,6];
console.log (minToFront(array))
console.log (array)
