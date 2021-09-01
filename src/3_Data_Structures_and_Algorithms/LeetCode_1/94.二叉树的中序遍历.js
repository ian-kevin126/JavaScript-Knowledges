/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal1 = function(root,arr =[]) {
  // 递归
  if (root) {
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
// @lc code=end

