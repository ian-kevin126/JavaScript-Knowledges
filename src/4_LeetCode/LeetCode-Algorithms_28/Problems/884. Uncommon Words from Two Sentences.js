var uncommonFromSentences = function (A, B) {
    let arr = A.concat(" ", B).split(" ")
    let result = []
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) result.push(arr[i])
    }
    return result
};