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
function doubleTrouble(arr) {
  for (var i = 0; i < arr.length; i++) {
    insertAt(arr,(i + 1), arr[i]);
    i = i + 1;
  }
}
array=[false, "C", 23,"Robert"];
doubleTrouble(array);
console.log(array);
