function insertAt(arr, position, value){
  if(position > arr.length-1) {
    arr.push(value);
  }
  else {
    for (var i = arr.length; i>position; i--) {
      arr[i]=arr[i-1];
    }
    arr[position] = value;
  }
}
array=[2,3,4,5,6,7];
console.log (insertAt(array,45))
console.log(array)
