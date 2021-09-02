//Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(array) {
   var newArray = [];
   var poppedValue = array[0];
   for(var i=1; i<array.length; i++) {
       newArray.push(array[i]);
   }
   console.log(newArray);
   console.log(poppedValue);
}


console.log(popFront([1, 2, 3, 4]));;
