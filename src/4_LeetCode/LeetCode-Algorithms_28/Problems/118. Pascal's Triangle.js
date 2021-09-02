var generate = numRows => {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let temp = new Array(i + 1).fill(1);
        for (let k = 1; k < i; k++) {
            temp[k] = result[i - 1][k - 1] + result[i - 1][k];
        };
        result.push(temp);
    };
    return result;
};