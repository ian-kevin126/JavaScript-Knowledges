var generateParenthesis = function(n) {
    const res = [];
    backtrack(res, 2 * n);
    return res;
};

function backtrack(res, len, curr = [], presum = 0) {
    if (curr.length === len) {
        res.push(curr.join(''));
        return;
    }
    if (presum < len - curr.length) {
        curr.push('(');
        backtrack(res, len, curr, presum + 1);
        curr.pop();
    }
    if (presum > 0) {
        curr.push(')');
        backtrack(res, len, curr, presum - 1);
        curr.pop();
    }
}