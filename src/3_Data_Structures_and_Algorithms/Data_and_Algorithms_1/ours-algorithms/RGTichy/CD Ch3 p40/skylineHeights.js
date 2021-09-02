function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}

function skylineHeights(arr) {
  var l = arr.length-1;
for (var i = 0; i<l; i++) {
  if (arr[i] > arr[i+1]) {
    removeAt(arr,i+1);
    l--;
  }
  if (arr[i] < 0) {
    removeAt(arr,i);
    l--;
  }
}
}
var array= [-1,1,4,3,5,6,3,7,1]
console.log (skylineHeights(array))
console.log (array)
