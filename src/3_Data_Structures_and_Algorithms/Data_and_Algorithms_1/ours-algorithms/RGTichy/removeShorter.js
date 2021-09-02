function removeAt(arr,position) {
  if (position <= arr.length-1){
  for (var i=position; i<arr.length-1; i++) {
    arr[i]=arr[i+1];
  }
  arr.pop();
  }
}
function removeShorter(arr,len) {
  for (var i=0; i<arr.length; i++) {
    str=array[i];
    if (str.length<len) {
      removeAt(arr,i);
      i--;
    }
  }
}
array=['22','32','42','52','625','72',8,'92'];
removeShorter(array,2);
console.log(array);
