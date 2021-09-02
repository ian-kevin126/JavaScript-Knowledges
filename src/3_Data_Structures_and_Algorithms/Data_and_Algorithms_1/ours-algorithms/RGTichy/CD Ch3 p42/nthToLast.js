function nthToLast(arr,nth) {

  if (arr.length > nth-1) {
    num=arr[arr.length-1-(nth-1)];
  }
  else {
    num =null;
  }
  return(num);
}

array=[-7,5,-2,"A",5,7,-2,0,3,"B"];
number=12;
console.log ("Before, number is "+number)
console.log ("After, number is "+ nthToLast(array,2))
console.log("----------")
array=[-7];
number=12;
console.log ("Before, number is "+number)
console.log ("After, number is "+ nthToLast(array,2))
