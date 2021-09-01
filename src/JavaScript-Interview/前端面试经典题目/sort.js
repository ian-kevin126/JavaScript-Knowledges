// 冒泡排序
function bubbleSort(ary) {
    for (var i = 0; i < ary.length; i++) {
        for (var j = 0; j < ary.length - i - 1; j++) {
            if (ary[j + 1] < ary[j]) {
                var temp = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    };
    return ary
}

// 快速排序
function quickSort(ary) {
    if (ary.length <= 1) return ary
    var mid = Math.floor(ary.length / 2);
    var midItem = ary.splice(mid, 1)[0];
    var leftAry = [];
    var rightAry = [];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if (cur >= midItem) {
            rightAry.push(cur)
        } else {
            leftAry.push(cur)
        }
    };
    return quickSort(leftAry).concat([midItem], quickSort(rightAry))
}
