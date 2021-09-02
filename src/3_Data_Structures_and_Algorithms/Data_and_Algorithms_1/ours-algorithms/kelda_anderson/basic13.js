console.log("Hello Coding Dojo World!");

var message = "Welcome to the Dojo";
console.log(message);

// // Print all integers from 1-255
function intList(start, end) {
    var newArray = [];
    for (var i = start; i <= end; i += 1) {
        newArray.push(i);
    }
    return newArray;
};
console.log(intList(1, 255));



// Print all integers from 1-255 and the sum as it prints

function intList2(start, end) {
    var newArray2 = [];
    var total = 0;
    for (var i = start; i <= end; i += 1) {
        newArray2.push(i);
    }
    for (var n = 0; n < newArray2.length; n++) {
        total += newArray2[n];
        console.log(total);
    }
    return newArray2;
};



console.log(intList2(1, 255));


// Given any array print it's largest element


var myArray = [1, 879, 165, 15, 64, 165, 564, 98, 68, 476, 5, 646, 54, 846, 213, 64];

myArray = myArray.sort(
    function(a, b) {
        return a - b;
    });


console.log(myArray[myArray.length - 1])

// Create an array w/ all the odd ints between 1 & 255 (inclusive)
function intList(start, end) {
    var newArray = [];
    for (var i = start; i <= end; i += 1) {
        newArray.push(i);

    }
    return newArray;
};

var myIntArray = intList(1, 255);

var findOdds = function(num) {
    return num % 2 !== 0;
};
var myOddsArray = myIntArray.filter(findOdds);

console.log(myOddsArray.toString());



// given an array and a of value Y -- count and print the # of array values that are greater than Y

function greaterThan(element) {

    return element > x;
};
var x = 150;
var myArray = [1, 879, 165, 15, 64, 165, 564, 98, 68, 476, 5, 646, 54, 846, 213, 64];

var newArray3 = myArray.filter(greaterThan);


console.log(newArray3);


// Print Odds 1-255 (I also put those numbers in an array)


function intList(start, end) {
    var newArray = [];
    for (var i = start; i <= end; i += 2) {
        newArray.push(i);
        console.log(i);
    }
    return newArray;
};

var myIntArray = intList(1, 255);
console.log(myIntArray);

//Iterate and print array values

function arrPrint(arr) {

    for (var i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i]);
    };

}
var myArr = [1, 879, 165, 23, 15, 64, 16, 23, 456, 5, 56, 5, 678, 4, 98, 68, 476, 5, 64, 6, 54, 8, 46, 213, 64];

arrPrint(myArr);

//Get and print array average


function averageValue(arr) {
    var arrSum = arr[0];
    for (var i = 0; i <= arr.length - 1; i++) {

        arrSum += arr[i];
    };
    var arrAverage = arrSum / arr.length;
    return arrAverage;
}
var myArr = [1, 879, 165, 23, 15, 64, 16, 23456, 5, 56, 5678, 4, 98, 68, 476, 5, 646, 54, 8, 46, 213, 64];

averageValue(myArr);
console.log(averageValue(myArr));

// Square the values

function arrValSquare(arr) {

    var arr = arr.map(Math.sqrt);

    return arr;
}

var onlyArray = [1, 879, 165, 23, 15, 64, 16, 23, 456, 5, 56, 5, 678, 4, 98, 68, 476, 5, 64, 6, 54, 8, 46, 213, 64];

arrValSquare(onlyArray);
console.log(arrValSquare(onlyArray));

// Zero Out Negtive numbers

function zeroOut(arr) {
    var newArray2 = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
        newArray2.push(arr[i]);

    }
    return newArray2;

}

var onlyArray = [1, 879, -165, -23, 15, 64, 16, -23, 456, -5, 5, -6, 5, -678, 4, 9, -8, 68, -476, 5, 64, 6, -54, 8, -46, 213, -64];

zeroOut(onlyArray);
console.log(zeroOut(onlyArray));

// shift Array values - shift all values in an array one to the left - drop the 1st and add a 0 at the end

function arrShift(arr) {
    var newArray = [];
    for (var i = 1; i <= arr.length; i++) {
        if (i <= arr.length - 1) {
            newArray.push(arr[i]);
        } else if (i = arr.length) {
            newArray.push(0);
        }

    }
    var arr = newArray;
    return arr;

}

var sampleArray = [1, 879, 165, 23, 15, 64, 16, -3, 456, -5, 5, -6, 5, -678, 4, 9, -8, 68, -47, 5, 64, 6, -4, 8, -46, 213, -64];

arrShift(sampleArray);
console.log(arrShift(sampleArray));
