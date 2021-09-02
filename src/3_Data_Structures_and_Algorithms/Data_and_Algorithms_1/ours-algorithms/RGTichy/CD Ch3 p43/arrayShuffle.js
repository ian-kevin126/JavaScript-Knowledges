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
function arrayShuffle(arr) {
  for (var i = arr.length-1; i >0; i--) {
    e = arr.pop();
    newP = Math.floor((Math.random() * arr.length)); // 0 - arr.length-1
    insertAt(arr,newP,e);
  }
}
array=[1,2,3,4,5,6];
arrayShuffle(array);
console.log (array)
