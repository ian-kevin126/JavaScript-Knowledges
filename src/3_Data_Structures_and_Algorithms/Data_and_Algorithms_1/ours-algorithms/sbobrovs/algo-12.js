function swap(arr) {
    var temp=arr[0];
    arr[0] =arr[arr.length-1];
    arr[arr.length-1] =temp;
    return arr;
}

console.log(swap( [1,5,10,-2]));
