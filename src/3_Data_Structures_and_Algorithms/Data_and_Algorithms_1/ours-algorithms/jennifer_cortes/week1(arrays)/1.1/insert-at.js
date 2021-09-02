//Given array, index, and additional value, insert the value into array at given index. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).


function insertAt (array , val) {
    array.splice(2, 0, val);
    console.log(array);
}

console.log(insertAt([1, 2, 3, 4,], "pancakes"));
