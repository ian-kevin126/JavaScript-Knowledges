/**
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */


// 暴力循环
var lengthOfLongestSubstring = function (s) {
    var max = 0, subStr = "";
    if (s.length == 1) return 1;
    for (let i = 0; i < s.length; i++) {
        subStr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (subStr.includes(s[j])) {
                max = Math.max(subStr.length, max);
                break;
            } else {
                subStr += s[j];
            }
            max = Math.max(subStr.length, max);
        }
    }
    return Math.max(subStr.length, max);
};


// map
var lengthOfLongestSubstring = function (s) {
    var map = {}, max = 0, start = 0;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] >= 0 && map[s[i]] >= start) {
            start = map[s[i]] + 1;
        } else {
            max = Math.max(max, i - start + 1);
        }
        map[s[i]] = i;
    }

    return max;
}