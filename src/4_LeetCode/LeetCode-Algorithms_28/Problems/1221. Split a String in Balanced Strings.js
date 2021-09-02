var balancedStringSplit = function (s) {
    const n = { 'R': -1, 'L': 1 };
    let t = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        t = t + n[s[i]];
        if (t == 0) {
            result++;
        }
    }
    return result;
};