/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function(root,arr=[]) {
  if(root){
    // 先处理自己，再处理左右
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr
};
// 迭代
var preorderTraversal = function(root) {
  // 1. 开始遍历 有一个stack存储
  // left入栈 直到left为空
  // 节点出栈，右孩子为目标节点
  let result = []
  let stack = []
  let cur = root
  while(cur || stack.length>0){
    while(cur){
      result.push(cur.val)
      stack.push(cur) // 后面要通过cur找他的right
      cur= cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return result
};

// @lc code=end

