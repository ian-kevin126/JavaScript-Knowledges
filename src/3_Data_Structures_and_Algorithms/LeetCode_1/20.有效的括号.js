/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []// 长度和数租长度有关 可能会一直增加
  let obj = { "(":")","[":"]", "{":"}" }

  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    // 括号匹配
    
    if(ele in obj){
      stack.push(ele)
    }else {
      if(ele != obj[stack.pop()]){
        // 不匹配
        return false
      }
    }
    
  }
  // 栈是不是空的 return false
  // 空的 return true
  return !stack.length
  // if(stack.length){
  //   return false
  // }else{
  //   return true
  // }
  

};
// @lc code=end

