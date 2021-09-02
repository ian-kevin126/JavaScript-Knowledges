/* This is the week one javascript algorithms file */

//Given array and an additional value, insert this value at the beginning of
//the array.
function push_front(arr, num){
    console.log('Push Front');
    for(var i = arr.length; i >= 0;){
        i = i - 1;
        arr[i + 1] = arr[i];
    }
    arr[0] = num;
    return arr;
}

//Given array, remove and return the value at the beginning of the array. Do
//this without using any built-in array methods except pop().
function pop_front(arr){
    console.log('Pop Front');
    var num = arr[0];
    var newarr = [];
    for(var i = 1; i < arr.length; i++){
        newarr[i-1] = arr[i];
    }
    return num;
}

// Given array, index, and additional value, insert the value into array at
// given index. You can think of PushFront(arr,val) as equivalent to
// InsertAt(arr,0,val).
//
// There is a corner case where the value could be palced in an element above
// the upper bound of the array, but I'll leave that be for now.
function insert_at(arr, index, value){
    console.log('Insert At');
    for(var i = arr.length; i > index; i--)
        arr[i] = arr[i - 1];
    arr[index] = value;
    return arr;
}

//Given array and an index into array, remove and return the array value at
//that index. Do this without using built-in array methods except pop(). Think
//of PopFront(arr) as equivalent to RemoveAt(arr,0).
function remove_at(arr, index){
    console.log('Remove At');
    var value = arr[index];
    for(i = index; i < arr.length; i++)
        arr[i] = arr[i + 1];
    arr.pop(arr.length -1);
    return value;
}

//Swap positions of successive pairs of values of given array. If length is
//odd, do not change final element. For [1,2,3,4], return [2,1,4,3]. For
//[false,true,42], return [true,false,42].
function swap_array_pairs(arr){
    console.log('Swap Array Pairs');
    for(var i = 0; i < arr.length; i++){
        // If the index is not at the length of the array minus one and 
        // not odd, swap the value from it's position and the one above it.
        if(i !== arr.length - 1 && i % 2 === 0){ //odd
            var temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

//Sara is looking to hire an awesome web developer and has received
//applications from various sources. Her assistant alphabetized them but
//noticed some duplicates. Given a sorted array, remove duplicate values.
//Because array elements are already in order, all duplicate values will be
//grouped together.
function array_remove_duplicates(arr){
    console.log('Remove Duplicates!');
    var newarr =  [arr[0]];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== newarr[newarr.length-1]){
            newarr[newarr.length] = arr[i];
        }
    }
    return newarr;
}

$(document).ready(function(){
    console.log('jquery loaded');
    console.log(push_front([0,1,2,3,4,5,6,7,8,9,10], 2));
    console.log(pop_front([0,1,2,3,4,5,6,7,8,9,10], 2));
    console.log(insert_at([0,1,2,3,4,5,6,7,8,9,10], 2, 77));
    console.log(remove_at([0,1,2,3,4,5,6,7,8,9,10], 2));
    console.log(swap_array_pairs([0,1,2,3,4,5,6,7,8,9,10]));
    console.log(swap_array_pairs([3,4,5,6,7]));
    console.log(swap_array_pairs([7,8,9,10]));
    console.log(array_remove_duplicates([1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5])); 
    var name_array = ['Richard', 'Richard', 'Richard', 'Richard', 'Richard', 'Randy', 'Randy', 'Randy', 'Randy', 'Randy', 'Santa', 'Sandy','Sandy','Sandy','Sandy', 'Sandy', 'Sandy'];
    console.log(array_remove_duplicates(name_array));
});
