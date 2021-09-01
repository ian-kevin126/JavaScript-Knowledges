/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    

  // 1. 怎么找 
  // 2. 什么时候终止
  // 3. find内部 怎么找下一步 （缓存存储中间的过程）

  if(board.length===0) return false
  if(word.length===0) return true
  const row = board.length
  const col = board[0].length
  // 怎么找
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      const ret = find(i,j,0)
      if(ret) return true
    }
  }
  return false
  function find(i, j, cur){
    // 越界要停止
    if(i>=row || i<0) return false 
    if(j>=col || j<0) return false 
    const letter = board[i][j]
    // 字母不匹配
    if(letter!==word[cur]) return false
    // 找到最后一个了，而且相等
    if(cur==word.length-1) return true
    // ---终止条件
    board[i][j] = null // 当前路径标记为null
    // ['A','B','C','E'],
    // ['S','F','C','S'],
    // ['A','D','E','E']
    const ret = find(i+1,j,cur+1) || 
                find(i-1,j,cur+1) || 
                find(i,j+1,cur+1) || 
                find(i,j-1,cur+1)
    board[i][j] = letter
    return ret
  }
};
// @lc code=end

