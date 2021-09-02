//my function scripts for the basic 13 algorithms
//exercise #1: get 1 to 255
function get_array() {
    var arr = [];
    for (var i = 1; i < 256; i++)
    arr.push(i)

    return arr;
}

//exercise #2: get even 1000
function sum_even_numbers(){
    var sum = 0;
    for (var i = 0; i < 1001; i++)
    if ( i % 2 === 0)
    sum +=i

    return sum;
}

//exercise #3: sum odd 5000
function sum_odd_5000() {
    var sum = 0;
    for (var i = 1; i < 5001; i++)
    if (i % 2 === 1)
    sum += i

    return sum;
}

//exercise #4: iterate an array
function iterArr(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++)
    sum = sum + arr[i]

    return sum;
}

//exercise #5: find max
function findMax(arr) {
    var max = arr[0];

    for (var i = 1; i < arr.length; i++)
    if (max < arr[i])
    max = arr[i];

    return max;
}

//exercise #6:find average
function findAvg(arr) {
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++)
    sum = sum + arr[i];
    avg = sum / arr.length;


    return avg;
}

//exercise #7: array odd
function oddNumbers() {
    var arr = [];

    for (var i = 1; i < 51; i = i + 2)
    arr.push(i);



    return arr;
}

//exercise #8:greater than y
function greaterY(arr, Y) {

    var count = 0;

    for ( var i = 0; i < arr.length; i++)
    if (arr[i] > Y)
    count = count + 1;


    return count;
}

//exercise #9:squares
function squareVal(arr) {

    for (var i = 0; i < arr.length; i++)
    arr[i] = arr[i]*arr[i];


    return arr;
}

//exercise #10: negatives
function noNeg(arr) {

    for ( var i = 0;  i < arr.length; i++)
    if (arr[i] < 0)
    arr[i] = 0;


    return arr;
}

//exercise #11: max/min/avg
function maxMinAvg(arr) {

    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i] > max)
        {max = arr[i]}

        if (arr[i] < min)
        {min = arr[i]}


        sum = sum + arr[i];
    }

    var avg = sum / arr.length;
    var arrnew = [max, min, avg]

    return arrnew;
}

//exercise #12: swap values
function swap(arr) {

    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length-1] = temp;

    return arr;
}

//exercise #13: number to string
function numToStr(arr) {

    for (var i = 0; i < arr.length; i++)
    if (arr[i] < 0)
    {arr[i] = 'Dojo'}

    return arr;
}
