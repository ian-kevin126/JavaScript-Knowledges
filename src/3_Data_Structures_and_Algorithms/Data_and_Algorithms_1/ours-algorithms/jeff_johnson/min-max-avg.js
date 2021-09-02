function maxMinAvg(arr) {
    //your code here
    var arrnew = [0,0,0]; //[max, min, avg]
    var sum =0;

    for (var i=0; i<arr.length; i++){
        if (arr[i] > arrnew[0]){
            arrnew[0]=arr[i];
        }
        if (arr[i] < arrnew[1]){
            arrnew[1] =arr[i];
        }
        sum=sum+arr[i];
    }
    arrnew[2]=sum/arr.length;
    return arrnew; 
