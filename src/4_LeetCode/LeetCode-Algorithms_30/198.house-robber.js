/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.80%)
 * Total Accepted:    294.1K
 * Total Submissions: 720.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 *
 * Example 1:
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function rob(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  const memory = [
    nums[0],
    Math.max(nums[0], nums[1]),
  ];

  for (let i = 2; i < len; i += 1) {
    const val = nums[i];
    memory[i] = Math.max(memory[i - 2] + val, memory[i - 1]);
  }

  return memory[len - 1];
};
