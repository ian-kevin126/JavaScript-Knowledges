function squareVal(arr) {
    //your code here
    var temp=0;
    for (var i=0; i<arr.length; i++){
        temp = arr[i] * arr[i];
        arr[i] = temp;
    }
    return arr;
}
