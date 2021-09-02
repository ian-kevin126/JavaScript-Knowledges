var isPalindrome = function(x) {
    if (x<0) return false;
    x = x.toString().split('')
    for (let i=0, j=Math.floor(x.length/2); i<j; i++) {
        if (x[i] != x[x.length-1-i])
            return false;
    }
    return true
};