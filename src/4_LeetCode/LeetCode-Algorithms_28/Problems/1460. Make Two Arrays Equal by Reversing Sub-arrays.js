var canBeEqual = function(target, arr) {
    return JSON.stringify(arr.sort()) === JSON.stringify(target.sort())
};