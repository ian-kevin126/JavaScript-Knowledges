function noNeg(arr) {

  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]<0)
    {
      arr[i]=0;
    }
  }
    return arr;
}
console.log(noNeg([1,5,10,-2] ));
