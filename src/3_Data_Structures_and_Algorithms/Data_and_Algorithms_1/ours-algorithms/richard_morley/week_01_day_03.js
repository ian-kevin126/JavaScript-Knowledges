//Arrays Day 3
//
//Array: Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].

//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.


//This function works for both positive and netative shift numbers.
function rotateArr(arr, shift){
    // Added rules to the shift! If the shift length is == to shift / arr.length, there is no need to shift. 
    if(shift / arr.length === 1){
        return arr;
    }else{
        // Positive array shift.
        // I got the below line idea from something another student posted. This will surely keep the code from touching the array a million times!
        var shift_actual = shift % arr.length;
        // When the shift value is above zero.
        if(shift_actual > 0){
            console.log('Positive Shift');
            // Loop through i = 0 up to the number of shifts.
            for(var i = 0; i < shift_actual; i++){
                //console.log('forward shift');
                // While moving the elements, keep the most significant element
                // (MSE).
                var temp = arr[arr.length -1];
                for(var y = arr.length -1; y > 0; y--){
                    arr[y] = arr[y -1];
                }
                // Place the MSE at the beginning of the array.
                arr[0] = temp;
            }
        }
        // Negative array shift. 
        // When the shift value is below zero.
        if(shift_actual < 0){
            console.log('Negative Shift');
            // Loop through x = 0 down to the number of shifts
            for(var x = 0; x > shift_actual; x--){
                //console.log('backward shift');
                // While moving the elements, keep the least significant element
                // (LSE).
                //console.log(x);
                var temp1 = arr[0];
                // Move the elements of the array down by one index.
                for(var q = 1; q < arr.length; q++){
                    arr[q -1] = arr[q];
                }
                // Place the LSE at the end of the array.
                arr[arr.length -1] = temp1;
            }
        }
    }
    return arr;
}


//Array: Filter Range
//Alan is good at breaking secret codes. One tool is to eliminate numbers he knows are outside a certain specific range. Given array and values min and max, remove array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function code_return(arr, min, max){
    console.log('Code Return');
    var returnLength = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min || arr[i] > max){
            returnLength += 1;
            arr[returnLength -1] = arr[i];
            //console.log(returnLength);
        }
    }
    arr.length = returnLength;
    return arr;
}


//Array: Concat
//Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// Concatinate two arrays
function concat(arr1, arr2){
    var newarr = [];
    var y = 0;
    console.log('Concatinate');
    // The length of the new array will be the legnth of two original arrays.
    newarr.length = arr1.length + arr2.length;
    for(var i = 0; i < newarr.length; i++){
        // If y is less than the length of the first array, move the elements
        // from the first array into the new array.
        //console.log(newarr.length);
        if(y < arr1.length){
            newarr[i] = arr1[y];
            y++;
            //console.log(y + ' y');
            //console.log(i+ ' i');
        // If y is less than the new array length, but more than the first
        // array to be concatinated, start adding array b.
        } else if(y >= arr1.length && y < newarr.length){
            y++;
            q = i - arr1.length;
            //console.log(q+ ' q');
            // The new array still gets data placed in i, but the data comes
            // from the q position of arr2.
            newarr[i] = arr2[q];
        }
    }
    return newarr;
}



$(document).ready(function(){
    console.log(rotateArr([1,2,3,4,5,11], 3004));
    console.log(rotateArr([1,2,3,4,5,11], -2000));
    console.log(code_return([45,76,34,65,23,12,34,54,765,76,345,23,54,123,76,98734,45,345], 20, 300));
    console.log(concat(['a',2,3,4,5,11], ['b',2,1,34,43,3,4,5,11]));
});
