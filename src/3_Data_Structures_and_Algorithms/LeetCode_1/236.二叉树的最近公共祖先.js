/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    

  // 如果左子树没有p或者q  那就去右边
  // 如果两边都找到了，那root就是了
  // findPorQ
  if(root==null || root==p || root==q ){
      return root
  }
  const left = lowestCommonAncestor(root.left,p,q)
  const right = lowestCommonAncestor(root.right,p,q)
  // if(left==null){
  //   return right
  // }
  // if(right==null){
  //   return left
  // }
  // // 左右都找到了p或者q 当前root就是了
  // return root

  return left==null ? right: right===null?left : root

};
// @lc code=end

