// Reverse array
// Given a numerical array, reverse the order of the values.
//  The reversed array should have the same length, with existing elements
//   moved to other indices so that the order of elements is reversed.
//   Don’t use a second array – move the values around within the array that you are given.

function reversearr(arr) {
  var i=0;
  var count=0;
  for(var x=arr.length-1;x>i;x--)
  {
    var temp = arr[x];
    arr[x]=arr[i];
    arr[i]=temp;
    i++;
    count += 1;

  }
  console.log(count);
  return arr;

}
console.log(reversearr([1,2,3,4,5,6,7,8]));
