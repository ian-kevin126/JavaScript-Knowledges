array=[2,3,4,5,6,7,8,9];
function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
  console.log(arr)
}
console.log(removeAt(array,2))
