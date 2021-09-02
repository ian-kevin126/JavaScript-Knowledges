// Find and Print Max
//Print the largest element in a given array.

function findMax(arr) {
    var max = arr[0];
    for (var i; i<=arr.length; i++) {
        if ( max > arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
