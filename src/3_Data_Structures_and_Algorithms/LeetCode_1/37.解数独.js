/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      if(board[i][j]!=='.') continue
      // 放一个数字试试 数字是1~9
      for(let k=1;k<=9;k++){
        if(isValid(board,i,j,k.toString())){
          // 能放
          board[i][j] = k.toString()
          if(solveSudoku(board)) return true
          // 回溯
          board[i][j] = '.'
        }
      }
      return false
    }

  }
  return true

};
function isValid(board,row,col,k){
  // 判定数字能不能放的函数
  const x = Math.floor(row/3)*3
  const y = Math.floor(col/3)*3

  for(let i=0;i<9;i++){
    if(board[row][i]===k || board[i][col]===k) {
      return false
    }
  }
  // 小方块
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(board[x+i][y+j]===k){
        return false
      }
    }

  }
  return true

}

// @lc code=end

