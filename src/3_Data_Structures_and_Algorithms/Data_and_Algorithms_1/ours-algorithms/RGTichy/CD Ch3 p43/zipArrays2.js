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
function zipArrays2(a,b) {
  l = a.length - 1;
  var j = 0;
  for (var i = 0; i <= l; i++) {
    if (j < b.length) {
      insertAt(a,i+1,b[j])
      j++;
      i++;
    }
  }
  while (j < b.length) {
    a.push(b[j]);
    j++;
  }
}
array2=['A','B','X'];
array1=[1,2,3,4,5,6,7];
zipArrays2(array1,array2);
console.log (array1)
