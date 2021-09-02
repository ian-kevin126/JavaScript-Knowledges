//##Arrays Day 4


//###Remove negatives

//Implement `removeNegatives()` that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order.
//* Additional: Don't use nested loops

function    removeNegatives(arr){
    console.log('Remove Negatives');
    // This var is to hold the number of non-negative values.
    var num = 0;
    // Iterate through the aray.
    for(var i = 0; i < arr.length; i++){
        //console.log('for');
        // If values are zero or more...
        if(arr[i] >= 0){
            // Increment the var for the number of non-negative values
            num += 1;
            // And place the positive value behind the most recently placed non-negative value.
            arr[num-1] = arr[i];
        }
    }
    // Truncate the length of the array to reflect the number of non-negative numbers in the array.
    arr.length = num;
    return arr;
}

//###Second-to-last
//Return the second-to-last element of an array. Given `[42,true,4,"Liam",7]`, return `"Liam"`. If array is too short, return `null`.

function secondToLast(arr){
    console.log('Second to Last');
    if(arr.length < 2){
        return 'null';
    } else{
    var value = arr[arr.length -2];
    return value;
    }
}

//###Nth-to-last
//Return the element that is N-from-array’s-end. Given `([5,2,3,6,4,9,7],3)`, return `4`. If the array is too short, return `null`.

function nToLast(arr, n){
    console.log('n to Last');
    if(arr.length < n){
        return 'null';
    } else{
    var value = arr[arr.length -n];
    return value;
    }
}

//###Second largest
//Return the second-largest element of an array. Given `[42,1,4,Math.PI,7]`, return `7`. If the array is too short, return `null`.

function secondLargest(arr){
    console.log('Sedond Largest');
    var max = 0;
    var second_max = 0;
    if(arr[0] > arr[1]){
        max = arr[0];
        second_max = arr[1];
    } else if(arr[1] > arr[0]){
        second_max = arr[0];
        max = arr[1];
    } else if( arr.length < 2){
        return 'null';
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            second_max = max;
            max = arr[i];
        }
    }
    return second_max;
}

//###Nth largest
//Given `arr` and `N`, return the Nth-largest element, where (N-1) elements are larger. Return `null` if needed.

function nthLargest(arr, n){
    console.log('n to Largest');
    var max = [];
    max[0] = arr[0];
    var nth_max = 0;
    if( arr.length < n){
        return 'null';
    }
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max[0]){
            for(var y = 0; y < max.length; y++){
                max[max.length] = max[max.length -1];
            }
            //max[0] = arr[i];
        }
        //console.log(max[-n]);
    }
    //return max[-n];
}


$(document).ready(function(){
    console.log(removeNegatives([-1,2,-3,4,-5,-1,2,-3,4,-5,1,2,-3,4,-5,11]));
    console.log(secondToLast([-1,2,-3,4,-5,-1,2,-3,4,-5,1,2,-3,4,"javascript",11]));
    console.log(secondToLast(["coder"]));
    console.log(nToLast([-1,2,-3,4,-5,-1,2,-3,4,-5,1,2,-3,4,"computer",11], 4));
    console.log(nToLast([3,'texteditor','cat'], 4));
    console.log(secondLargest([2,3,4,66,5,6,7,67,33,44,55,77]));
    console.log(nthLargest([2,3,4,66,5], 4));
});
