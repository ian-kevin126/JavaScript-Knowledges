/* 1. Get array between 1 and 255. */
function get_array() {
    var arr = [];
    for(var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr; 
}

/* 2. Get the sum of all even numbers between 1 and 1000. */
function sum_even_numbers(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++) {
        if (i % 2 === 0)
            sum += i;
    }
    return sum; 
}

/* 3. Get the sum of all odd numbers between 1 and 5000. */
function sum_odd_5000() {
    var sum = 0;
    for(var i = 1; i <= 5000; i++) {
        if (i % 2 === 1)
            sum += i;
    }
    return sum; 
}

/* 4. Sum all the numbers from an array. */
function iterArr(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}

/* 5. Find the maximum number from an array. */
function findMax(arr) {
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max; 
}

/* 6. Find the average number from the array values. */
function findAvg(arr) {
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg; 
}

/* 7. Return an array of all the odd numbers between 1 and 50. */
function oddNumbers() {
    var arr = [];
    for(var i = 0; i <= 50; i++) {
        if (i % 2 == 1)
            arr.push(i);
    }
    return arr; 
}

/* 8. Return the values greater than Y. */
function greaterY(arr, Y) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > Y)
            count += 1;
    }
    return count; 
}

/* 9. Retrun an array with square products of the original array. */
function squareVal(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr; 
}

/* 10. Return the array with zeros in the elements that contained negative
 * values. */
function noNeg(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0)
            arr[i] = 0;
    }
    return arr; 
}

/* 11. Return an array with the Max, Min and Average of the original array. */
function maxMinAvg(arr) {
    var arrnew = [];
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        avg += arr[i];
        if(arr[i] >= 0)
            arrnew[0] = arr[i];
    }
    for(var f = 0; f < arr.length; f++) {
        if(arr[f] <= 0)
            arrnew[1] = arr[f];
    }
    arrnew[2] = avg / arr.length;
    return arrnew; 
}

/* 12. Swap the first and last elements of an array. */
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr; 
}

/* 13. Return an array with the string 'Dojo' in the elements that originally
 * contained negative numbers. */
function numToStr(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0)
            arr[i] = 'Dojo';
    }
    return arr; 
}
