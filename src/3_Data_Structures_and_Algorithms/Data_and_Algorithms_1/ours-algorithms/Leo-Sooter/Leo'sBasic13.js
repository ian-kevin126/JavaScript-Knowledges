//Basic 13 Algorithms

//Get 1 - 255
function get_array() {
    var arr = [];
    var i = 0;
    for(i=1; i<256; i++) {
        arr.push(i)
    }
    return arr;
}

//Get Even 1000
function sum_even_numbers(){
    var sum = 0;
    var i;
    for(i=2; i<1001; i+=2) {
        sum +=i;
    }
    return sum;
}

//Sum Odd 5000
function sum_odd_5000() {
    var sum = 0;
    var i;
    for(i=1; i<5001; i+=2) {
        sum += i;
    }
    return sum;
}

//Iterate an array
function iterArr(arr) {
    var sum = 0;
    var i;
    for(i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Find Max
function findMax(arr) {
    var max = 0;
    var i;
    for(i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//Find Average
function findAvg(arr) {
    var avg = 0;
    var i;
    for(i=0; i<arr.length; i++){
        avg += arr[i];
    }
    avg = avg / arr.length;
    return avg;
}

//Array Odd
function oddNumbers() {
    var arr = [];
    var i;
    for(i=0; i<50; i++) {
        if(i % 2) {
            arr.push(i);
        }
    }
    return arr;
}

//Greater than Y
function greaterY(arr, Y) {
    var count = 0;
    var i;
    for(i=0; i<arr.length; i++) {
        if(arr[i] > Y) {
            count ++;
        }
    }
    return count;
}

//Squares
function squareVal(arr) {
    var sqArr =[];
    var i;
    for(i=0; i<arr.length; i++) {
        sqArr.push(arr[i] * arr[i]);
    }
    arr = sqArr;
    return arr;
}

//Negatives
function noNeg(arr) {
    var posArr = [];
    var i;
    for(i=0; i<arr.length; i++) {
        if(arr[i]>=0) {
            posArr.push(arr[i]);
        }
        else{
            posArr.push(0);
        }
    }
    arr = posArr;
    return arr;
}

//Min/Max Average
function maxMinAvg(arr) {
    var arrnew = [];
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    var i;
    for(i=0; i<arr.length; i++) {
        if(max<arr[i]) {
            max = arr[i];
        }
        if(min>arr[i]) {
            min = arr[i];
        }
        avg += arr[i];
    }
    avg = avg / arr.length;
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew;
}

//Swap values
function swap(arr) {
    var arrnew = [];
    var i;
    var last = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = last;
    arrnew = arr;
    return arrnew;
}

//Number to String
function numToStr(arr) {
    var newArr = [];
    var i;
    for(i=0; i<arr.length; i++) {
        if(arr[i]<0){
            newArr.push('Dojo');
        }
        else{
            newArr.push(arr[i]);
        }
    }
    arr = newArr;
    return arr;
}
