//Array with Odds
//Create an array with odd integers from 1­255.

function printArray() {
    var arr = [];
    for (var i = 1; i < 256 ; i++) {
        if (i % 2 ==1)
        arr.push(i);
    }
    return arr;
}


console.log(printArray());
