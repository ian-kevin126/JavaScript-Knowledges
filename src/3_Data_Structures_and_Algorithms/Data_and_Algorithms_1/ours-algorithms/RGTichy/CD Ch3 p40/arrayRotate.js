function pushFront(arr,value){
  for (var i = arr.length-1; i >= 0; i--) {
    arr[i+1]=arr[i];
  }
  arr[0]=value;
  return arr;
}
function rotateArray(arr,shiftBy) {
  if (shiftBy/1 == shiftBy) {
var tmp = 0;
  for (var i=1; i <= shiftBy; i++) {
    tmp = arr.pop();
    pushFront(arr,tmp);
  }
  console.log(arr);
}
else {
  console.log("shiftBy is invalid")
}
}
var array= [1,"A",3,4,5,6];
console.log (rotateArray(array,3))
console.log(array)
