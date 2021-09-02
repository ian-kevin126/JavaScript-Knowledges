/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (36.78%)
 * Total Accepted:    189.8K
 * Total Submissions: 515.8K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 *
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Note:
 * You may assume both s and t have the same length.
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const compare = (target, template) => {
    const map = {};
    const len = target.length;
    for (let i = 0; i < len; i += 1) {
      const char = target[i];
      if (map[char] === undefined) {
        map[char] = template[i];
      } else if (map[char] !== template[i]) {
        return false;
      }
    }
    return true;
  };

  return compare(s, t) && compare(t, s);
};
