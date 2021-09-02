
function arrayRemoveDuplicates(arr) {
  var off=1;
  for (var i = 0; i < arr.length; i++) {
    console.log("Before: idx="+i+", off="+off+", arr="+arr)
    if (arr[i] === arr[i + 1]|| arr[i] > arr[i+1]) {
      arr[i+1]=arr[i+1+off];
      off++;
      i--;
      console.log("After: idx="+i+", off="+off+", arr="+arr)
    }
    else {
      console.log("--moved forward on index")
      off--;
    }
  }
  arr.length=arr.length-off;
return(arr);
}
array=[3,3,4,5,6,6,6,7,7,8,9,10,10,10,10,'10','Pam',"Pam",'Robert'];
//array=[3,3,4,4,4,5,5,5];
console.log(array);
arrayRemoveDuplicates(array);
console.log(array)
