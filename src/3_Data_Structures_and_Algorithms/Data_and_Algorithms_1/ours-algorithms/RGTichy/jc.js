function popFront(array) {
    var newArray = [];
    var poppedValue = array[0];
    for(var i=1; i<array.length; i++) {
        newArray.push(array[i]);
    }
    return(newArray)
}

array = [3,4,5,6]
array = popFront(array);
console.log(array)
// but we lost "front" now
