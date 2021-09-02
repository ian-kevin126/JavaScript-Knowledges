function findAvg(arr) {
    sum=arr[0];
    for(var i=1;i<arr.length;i++)
      {
        sum += arr[i];
      }
      var avg= sum/arr.length;
    return avg;
}

console.log(findAvg([1,3,5,7,20]));
