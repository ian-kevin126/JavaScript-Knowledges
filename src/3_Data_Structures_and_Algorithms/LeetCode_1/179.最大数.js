/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    return nums[0] === 0 ? "0" : nums.join("");
};
// @lc code=end

