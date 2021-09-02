/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    let len = s.length;
    let num = 0;
    for (let i = 0; i < len; i++) {
      num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
      if (num > end - start) {
        start = i - Math.floor((num - 1) / 2);
        end = i + Math.floor(num / 2);
      }
    }
    return s.slice(start, end + 1);
  };
  
  let expandAroundCenter = function (s, left, right) {
    let l = left;
    let r = right;
    let len = s.length;
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  };