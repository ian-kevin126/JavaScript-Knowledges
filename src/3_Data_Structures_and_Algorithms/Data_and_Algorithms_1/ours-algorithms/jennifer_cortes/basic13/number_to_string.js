//Number to String
//Replace any negative values in an array with 'Dojo'.

function numToStr(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(numToStr([1,-2,3]))
