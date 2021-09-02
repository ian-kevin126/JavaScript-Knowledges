//1 to 255
function get_array() {
    var arr = [];
    for (var i = 1; i <= 255; i=i+1) {
        arr.push(i);
    }
    return arr;
}

//Get even 1000
function sum_even_numbers(){
    var sum = 0;
    //your code here
    for (var i=0; i<=1000; i=i+2) {
        sum=sum+i;
    }
    return sum;
//Sum odd 5000
function sum_odd_5000() {
    var sum = 0;
    //your code here
    for (var i=1; i<=4999; i=i+2) {
        sum=sum+i;
    }
    return sum;
}
//Iterate an array
function iterArr(arr) {
    //your code here
    var sum=0;
    var l=arr.length-1;
    for (var i=0; i<=l;i++) {
        sum = sum + arr[i];
    }
    return sum;
}
//Find max
function findMax(arr) {
    //your code here
    arr.sort(function(a, b){return b - a});
    var max=arr[0];
    return max;
}
//Find average
function findAvg(arr) {
    //your code here
    var l = arr.length -1;
    var avg=0;
    for (var i=0; i<=l; i++) {
        avg=avg+arr[i];
    }
    avg=avg/(l+1)
    return avg;
}
//Array odd
function oddNumbers() {
    var arr = [];
    //your code here
    for (var i=1; i<=49; i=i+2) {
        arr.push(i);
    }
    return arr;
}
//Greater than Y
unction greaterY(arr, Y) {
    //your code here
    var l=arr.length-1;
    var count=0;
    for (var i=0; i<=l; i++) {
        if (arr[i]>Y) {count++}
    }
    return count;
}
//Squares
function squareVal(arr) {
    //your code here
    var l = arr.length-1;
    for (var i=0; i<=l; i++) {
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
//Negatives
function noNeg(arr)
{
    var l= arr.length - 1;
    for (var i = 0; i <= l; i++) {
        if(arr[i]<0) {arr[i]=0;}
    }
    return arr;
}
//Max/Min/Avg
function minMaxAvg(arr) {
    var arrnew=[];
    var l = arr.length - 1;
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    for (var i = 0; i <= l; i++) {
        avg = avg + arr[i];
        if (arr[i] < min) {min = arr[i];}
        if (arr[i] > max) {max = arr[i];}
    }
    avg = avg / (l+1);
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(avg);
    return arrnew;
}
//Swap values
function swap(arr) {
    //your code here
    var l = arr.length - 1;
    var temp = arr[0];
    arr[0]=arr[l];
    arr[l]=temp;
    return arr;
}
//Number to string
function numToStr(arr) {
    //your code here
    var l = arr.length - 1;
    for ( var i = 0; i <= l; i++) {
        if (arr[i] < 0) {arr[i]="Dojo";}
    }
    return arr;
}
