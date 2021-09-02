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
function intermediateSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if ((i+1) % 10 == 0 || i == (arr.length-1)) {
      insertAt(arr,i+1,sum);
      sum =0;
      i++;
    }
  }
}
array= [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
intermediateSum(array);
console.log("array = ["+ array +"]");
