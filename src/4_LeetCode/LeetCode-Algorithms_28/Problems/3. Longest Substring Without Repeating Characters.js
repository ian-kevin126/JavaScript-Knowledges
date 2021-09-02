var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if (len < 2) { return len; }
    let res = [];
    let tmp = [];
    [...s].forEach(x => {
      if (tmp.includes(x)) {
        tmp = [...tmp.slice(tmp.findIndex(y => y === x ) + 1)];
      }
      tmp.push(x);    
      if (tmp.length > res.length) { res = tmp; }
    });
  return res.length;
};