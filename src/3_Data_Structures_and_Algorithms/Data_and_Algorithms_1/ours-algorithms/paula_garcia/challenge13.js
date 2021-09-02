function numToStr(arr) {
    var Dojo = arr[0]; 
    for (var i=0; i<arr.length; i++){
        if (arr[i] <0) {
            arr[i] = 'Dojo'
        }
    }
    return arr; 
}