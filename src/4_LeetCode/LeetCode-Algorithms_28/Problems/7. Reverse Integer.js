var reverse = function(x) {    
    let result = 0;
    let arr = [];
    let stack = x.toString().split('');
    
    if (!x) return result;
    
    while (stack.length) {
        let current = stack.pop();
        arr.push(current);
    }
    
    result = parseInt(arr.join(''));
    
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    
    return x < 0 ? -result : result;
};