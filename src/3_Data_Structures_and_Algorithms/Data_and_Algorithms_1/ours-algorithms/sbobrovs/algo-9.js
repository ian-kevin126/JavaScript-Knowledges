function squareVal(arr) {
    for(var i=0;i <arr.length;i++)
    {
      arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(squareVal( [1,5,10,-2]));
