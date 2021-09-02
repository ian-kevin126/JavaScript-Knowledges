function greaterY(arr, Y) {
    var count =0;
    for(var i=0;i<arr.length;i++)
    {
      if(Y<arr[i])
      {
        count+=1;
      }
    }
    return count;
}

console.log(greaterY( [1, 3, 5, 7],3));
