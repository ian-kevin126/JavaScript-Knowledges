function swap(arr) {
    //your code here

    var temp =0;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
