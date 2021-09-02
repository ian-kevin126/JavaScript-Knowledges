/* This is the week one day two algorithms files. */

//Reverse array
//Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.
function reverse_array(arr){
    console.log('Reverse Array');
    for(i = 0; i < arr.length / 2; i++){
        var temp = arr[i];
        //console.log(arr.length);
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

//Remove negatives
//Implement removeNegatives() that accepts an array and removes any negative values.
function remove_negatives(arr){
    var newarr = [];
    console.log('Remove Negatives');
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newarr[newarr.length] = arr[i];
        }
    }
    return newarr;
}

//Array Min to Front
//Given an array of comparable values, move the lowest element to the array’s front, shifting backward elements that previously were ahead of it. Change [4,2,1,3,5] to [1,4,2,3,5].
function min_to_front(arr){
    console.log('Min to Front');
    //console.log(arr);
    var min = arr[0];
    var min_pos = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            min_pos = i;
        }
    }
    //console.log(min);
    //console.log(min_pos);
    for(var y = min_pos; y > 0; y--){
        //console.log(y);
        arr[y] = arr[y -1];
    }
    arr[0] = min;
    return arr;
}

//Skyline Heights
//From lovely Burbank you have a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending directly away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [1,-1,7,3] return [1,7].
function skyline_heights(arr){
    console.log('Skyline Heights');
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        // If any number is larger than the initial array element, place that
        // value in the max value variable.
        if(arr[i] > newarr[newarr.length -1]){
            //console.log('if');
            newarr[newarr.length] = arr[i];
        }else if(arr[i] > 0 && newarr.length === 0){
            //console.log('else');
            newarr[newarr.length] = arr[i];
        }
    }
    return newarr;
}


$(document).ready(function(){
    console.log('JavaScript loaded');
    console.log(reverse_array([20,1,-2,3,-4,5,6,-7,-8,9,10]));
    console.log(remove_negatives([20,1,-2,3,-4,5,6,-7,-8,9,10]));
    console.log(min_to_front([20,1,-2,3,-4,5,6,-7,-8,9,10]));
    console.log(skyline_heights([-2,3,-4,5,3,7,-8,9,10]));
});
