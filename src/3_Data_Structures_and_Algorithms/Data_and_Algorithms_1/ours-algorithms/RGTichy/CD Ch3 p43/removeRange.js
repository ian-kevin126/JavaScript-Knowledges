function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}
function removeRange(arr,begin,end) {
  // Only do anything if the array is longer than "begin"
  if (begin < arr.length-1) {
  // If "end" is past the last element set arr.length="begin" and quit
    if (end >= arr.length-1) {
        arr.length = begin;
    }
  // find out how many elements to remove at the "begin" position
    else {
      for (var i = 1; i <= (end-begin)+1; i++) {
        removeAt(arr,begin);
      }
    }
  }
}
array=[1,2,3,4,5,6];
removeRange(array,3,4);
console.log(array);
array=[1,2,3,4,5,6];
removeRange(array,3,5);
console.log(array);
array=[1,2,3,4,5,6];
removeRange(array,7,9);
console.log(array);
