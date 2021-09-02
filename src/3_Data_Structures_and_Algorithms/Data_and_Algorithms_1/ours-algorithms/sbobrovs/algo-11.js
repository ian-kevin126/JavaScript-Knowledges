function maxMinAvg(arr) {
    max =arr[0];
    sum =arr[0];
    min =arr[0];
    for(var i=1;i<arr.length;i++){
      if(max<arr[i])
      {
         max=arr[i];
      }
      if(arr[i]<min)
      {
        min=arr[i];
      }
      sum += arr[i];

    }
    var avg= sum/arr.length;
    var arrnew =[max,min,avg];
    return arrnew;

}

console.log(maxMinAvg([1,5,10,-2]));
