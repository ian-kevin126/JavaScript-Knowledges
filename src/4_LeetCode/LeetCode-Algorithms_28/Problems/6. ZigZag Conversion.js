let convert = function(s, numRows) {
  if (s.length <= numRows || numRows < 2) return s;
  let len = s.length;
  let num = 2 * (numRows - 1);
  let res = Array(numRows).fill('');
  let tmp = 0;
  for (let i = 0; i < len; i++) {
    tmp = i % num;
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }
  return res.join('');
};