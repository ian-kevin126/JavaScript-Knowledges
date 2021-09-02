function maxMinAvg(arr) {
    var sum = 0;
    var min = 0;
    var max = 0;

    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }

        sum = sum +arr[i];
        var avg = sum/arr.length;
        var arrnew = [max, min, avg]
    }
    return arrnew;
}
console.log(maxMinAvg([1,2,3]))
