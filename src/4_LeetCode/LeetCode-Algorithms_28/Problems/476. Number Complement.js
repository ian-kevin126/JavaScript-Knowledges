var findComplement = function(num) {
    return parseInt((num).toString(2).split('').map(n => n === '0' ? 1 : 0).join(''), 2);
};