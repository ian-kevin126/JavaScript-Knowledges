//Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).

function removeAt (array , val) {
    var spliceVal = array[val];
    array.splice(val);
    console.log(array);
    console.log(spliceVal);
}

console.log(removeAt([1, 2, 3, 4,], 2));
