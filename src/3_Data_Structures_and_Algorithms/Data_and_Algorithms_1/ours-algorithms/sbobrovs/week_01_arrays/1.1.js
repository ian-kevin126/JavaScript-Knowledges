
// Push Front
// Given array and an additional value, insert this value at the beginning of the array.
function pushfront(arr,Y) {

var arrnew=[Y];
for(var i=1;i<arr.length+1;i++)
{
  arrnew[i]=arr[i-1];
}
  return arrnew;
}
console.log(pushfront([1,2,3,4],5));


// Pop Front
// Given array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().
function popfront(arr) {
  var arrnew =[];
  number= arr.length-1;
  for(var i=(arr.length-1);i>0;i--)
  {
    arrnew[(i-1)]=arr.pop();
  }
  return arr;

}
console.log(popfront([1,2,3,4]));

// Insert At
// Given array, index, and additional value, insert the value into array at given index.
// You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).

function insertat(arr,d,y) {
  var arrnew = [];
  for (var i=0;i<(d-1);i++)
  {
    arrnew[i]=arr[i];
  }
  arrnew[i]=y;
  for(var z=i+1;z <(arr.length)+1;z++)
  {
    arrnew[z]=arr[z-1];
  }
   return arrnew;
}
console.log(insertat([1,2,3,4],4,10));


// // Remove At
// // Given array and an index into array, remove and return the array
// value at that index. Do this without using built-in array methods except pop().
// // Think of PopFront(arr) as equivalent to RemoveAt(arr,0).

function RemoveAt(arr,d) {
  var arrnew =[];
  console.log(d);
  for(var i=0;i<d;i++)
  {
    arrnew[i]=arr[i];
  }
  var number = arrnew.pop();
  return number;
}

console.log(RemoveAt([4,5,2,1,4,21,22,4],6));
