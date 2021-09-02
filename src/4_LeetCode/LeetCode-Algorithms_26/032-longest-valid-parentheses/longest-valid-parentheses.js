// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
//
// Example 1:
//
//
// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
//
//
// Example 2:
//
//
// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"
//
//


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var dp  = new Array(s.length),
        max = 0, l;
    dp.fill(0);
    for (var i = 0,len = s.length;i < len; ++i) {
        if (s[i] === ')' && i > 0
                && (l = i - 1 - dp[i - 1]) >= 0
                && s[l] === '(') {
            dp[i] = 2 + dp[i - 1] + (l > 0 ? dp[l - 1] : 0);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};

