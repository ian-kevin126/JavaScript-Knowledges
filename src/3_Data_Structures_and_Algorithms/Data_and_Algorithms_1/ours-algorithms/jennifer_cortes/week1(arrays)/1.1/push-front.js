//Given array and an additional value, insert this value at the beginning of the array.

function pushFront(array, value) {
    var newArray = array;
    newArray.unshift(value);
    console.log(newArray);
}

pushFront([1,2,3], 4);
