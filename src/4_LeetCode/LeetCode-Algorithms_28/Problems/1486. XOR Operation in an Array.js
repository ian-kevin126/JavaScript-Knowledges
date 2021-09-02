var xorOperation = function(n, start) {
    
    let nums = new Array(n).fill(start);
    
    return nums.map((item, i) => item + 2 * i).reduce((acc, item) => acc ^ item);
};