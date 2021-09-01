/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */




var simplifyPath = function(path) {
  const obj = {
    '':statck=>stack,
    '.':stack=>stack,
    '..':stack=>{
      stack.pop()
      return stack
    }
  }

  let stack = []
  let paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]
    // '' '.' '.. ' 上一级
    // 如果还支持政策，支持各种自定义语法 ~== /user/dasheng
    // 一大堆if else
    if(p=='..'){ 
      stack.pop()
    }else if(p && p!='.'){
      stack.push(p)
    }
    
  }
  return '/'+stack.join('/')
};
// @lc code=end

