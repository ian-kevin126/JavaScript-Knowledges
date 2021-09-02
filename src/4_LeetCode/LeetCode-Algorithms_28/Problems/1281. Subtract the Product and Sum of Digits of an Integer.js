var subtractProductAndSum = n => {
    let digits = n.toString().split('').map(n => parseInt(n));
    return digits.reduce((acc, cur) => acc * cur) - digits.reduce((acc, cur) => acc + cur);
};