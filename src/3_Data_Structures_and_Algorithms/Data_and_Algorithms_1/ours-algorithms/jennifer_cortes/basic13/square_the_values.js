//Square the Values
//Given an array, square each value in the array

function squareVal(arr) {
   var newArray = [];
   for (var i = 0; i < arr.length; i++) {

    newArray.push(arr[i] * arr[i]);
    }
    return newArray;
}

console.log(squareVal([1,2,3]))
