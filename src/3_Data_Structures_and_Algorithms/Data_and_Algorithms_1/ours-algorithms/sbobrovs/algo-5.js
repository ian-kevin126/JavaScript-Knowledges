function findMax(arr) {
    max= arr[0];
    for(var i=1;i<arr.length;i++)
    {
      if(arr[i]>max)
      {
        max=arr[i];
      }
    }
    return max;
}

console.log(findMax([-3,3,5,7]));
