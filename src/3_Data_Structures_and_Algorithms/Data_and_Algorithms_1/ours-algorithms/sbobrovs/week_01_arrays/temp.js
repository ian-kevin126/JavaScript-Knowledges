// Array Min to Front
// Given an array of comparable values, move the lowest element to the array’s front,
//  shifting backward elements that previously were ahead of it.
//  Change [4,2,1,3,5] to [1,4,2,3,5].

function mintofront(arr) {
  var min=arr[0];
  for(var i=1;i<arr.length-1;i++){
      if(min>arr[i])
      {
        min=arr[i];
        temp=arr[0];
        arr[0]=arr[i];
        

      }
    }
  return arr;

}

console.log(mintofront([4,2,7,3,1]));
