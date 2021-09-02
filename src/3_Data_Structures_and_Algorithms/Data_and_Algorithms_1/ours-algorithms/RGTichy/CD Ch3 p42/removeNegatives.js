function removeNegatives(arr) {
  if (arr.length>0) {
    var last=arr.pop();
    removeNegatives(arr);
    if (last >= 0) {
      arr.push(last);
    }
  }
}

array1=[-7,5,-2,"A",5,7,-2,0,3,"B"];
console.log(removeNegatives(array1))
console.log(array1)
console.log(-Number.MAX_VALUE)
