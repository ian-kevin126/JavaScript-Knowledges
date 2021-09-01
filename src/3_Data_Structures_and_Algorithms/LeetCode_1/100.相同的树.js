/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 如果p和q都是null，空二叉树，那么他们相等
  if(p==null && q==null){
    return true
  }
  if(p==null || q==null){
    return false
  }
  if(p.val !==q.val){
    return false
  }
  // p和q的值相等，需要递归判定左右子树
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
// @lc code=end

