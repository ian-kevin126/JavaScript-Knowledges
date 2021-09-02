function concat(arr1,arr2) {
  var result = [];
  //result = arr1;
  for (var i=0; i<arr1.length; i++) {
    result[i]=arr1[i];
  }
  len=arr2.length-1;
  if (len>=0) {
    for (var i=0; i<=len; i++) {
      result.push(arr2[i]);
    }
  }
  return(result);
}
var array1 = [1,"B",3,4,5,6];
var array2 = ["A","B",3,"C","z",9];
var r = ['x','z'];

console.log ("Before " + array1+" and "+array2)
console.log("concat(["+array1+"] , ["+array2+"])")
r=concat(array1,array2);
console.log("array1:"+array1)
console.log("array2:"+array2)
console.log ("r = ["+r+"]")
