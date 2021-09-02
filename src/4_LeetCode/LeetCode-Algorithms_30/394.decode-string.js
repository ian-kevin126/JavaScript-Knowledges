/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (43.88%)
 * Total Accepted:    89K
 * Total Submissions: 202.8K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * Given an encoded string, return it's decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 *
 * You may assume that the input string is always valid; No extra white spaces,
 * square brackets are well-formed, etc.
 *
 * Furthermore, you may assume that the original data does not contain any
 * digits and that digits are only for those repeat numbers, k. For example,
 * there won't be input like 3a or 2[4].
 *
 * Examples:
 *
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function decodeString(s) {
  const DECODE_RE = /(\d{0,})\[(\w+)\]/;

  let result = s;
  while (DECODE_RE.test(result)) {
    result = result.replace(DECODE_RE, (_, count, letter) => letter.repeat(count));
  }

  return result;
};
