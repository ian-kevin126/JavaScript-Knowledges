
function arrayRemoveDuplicates(arr) {
  var last=arr.pop();
  if (arr.length>1) {
    if (arr[arr.length-1]===last) {
      arr.pop();
    }
    arrayRemoveDuplicates(arr);
    if (arr[arr.length-1]===last) {
      /* don't push last back on */
    }
    else {
      arr.push(last);
    }
  }
return arr;
}
array=[3,3,4,5,6,6,6,7,7,8,9,10,10,10,10,'10','Pam',"Pam",'Robert'];
console.log(array);
arrayRemoveDuplicates(array);
console.log(array)
