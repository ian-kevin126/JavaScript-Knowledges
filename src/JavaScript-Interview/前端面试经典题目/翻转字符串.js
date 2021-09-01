// 翻转字符串
function reverseStr1(str) {
    return str.split('').reverse().join('');
}

function reverseStr2(str2) {
    var res = '';
    for (var i = str2.length - 1; i > -1; i--) {
        res += str2[i]
    };
    return res
}