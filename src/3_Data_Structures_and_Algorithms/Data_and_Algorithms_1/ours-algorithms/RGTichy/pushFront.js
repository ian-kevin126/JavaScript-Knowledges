function pushFront(arr,value){
  for (var i = arr.length-1; i>=0; i--) {
    arr[i+1]=arr[i];
  }
  arr[0]=value;
  return arr;
}
console.log (pushFront([2,3,4,5,6,7],11))
