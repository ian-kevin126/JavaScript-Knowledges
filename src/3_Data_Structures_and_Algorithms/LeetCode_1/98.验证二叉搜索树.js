/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST1 = function(root) {
  
  // 整个右树都要大于节点 递归，大家可以自己考虑迭代实现
  function dfs(node,low,high){
    if(node==null){
      return true
    }
    if(node.val<=low || node.val>=high){
      return false
    }
    return dfs(node.left,low,node.val) && dfs(node.right,node.val,high)
  }
  return dfs(root, -Infinity, Infinity)
};

var isValidBST = function(root) {
  // 中序遍历是升序的
  let stack = []
  let flag = -Infinity

  while(root || stack.length > 0){
    while(root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if(root.val<=flag){
      return false
    }
    flag = root.val
    root = root.right
  }
  return true
};
// @lc code=end

