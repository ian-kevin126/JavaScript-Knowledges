function unique(ary) {
    let obj = {};
    for (let i = 0; i < ary.length; i++) {
        const item = ary[i];
        if (obj[item]) {
            ary.splice(i, 1);
            i--;
        } else {
            obj[item] = item;
        }
    };
    return ary
};

function unique2(ary) {
    let res = []
    for (let i = 0; i < ary.length; i++) {
        const item = ary[i];
        if (res.indexOf(item) > -1) {
            ary.splice(i, 1);
            i--;
        } else {
            res.push(item)
        }
    }
    return res
}

function unique3(ary) {
    return [...new Set(ary)]
}

console.log(unique3([1, 2, 3, 4, 4, 2, 5]));