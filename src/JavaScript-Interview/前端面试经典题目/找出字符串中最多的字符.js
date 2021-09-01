// 找出字符串中最多的字符
function findMax(str) {
    var obj = {};
    for (var i in str) {
        var cur = str[i];
        if (obj[cur]) {
            obj[cur] = obj[cur] + 1;
        } else {
            obj[cur] = 1;
        }
    };
    var maxStr = '';
    var maxNum = 0;
    for (var key in obj) {
        if (obj[key] > maxNum) {
            maxNum = obj[key];
            maxStr = key;
        } else if (obj[key] === maxNum) {
            maxStr += key
        }
    };
    return { maxNum, maxStr }
};