/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor1 = function(root, p, q) {
    // 二叉搜索树可以通过大小来判定
    // 如果树节点的值位于p和q两节点值中间或与某个节点相等，则该节点一定是两节点最近父节点
    // 否则如果树节点值大于两节点值，则两节点都位于树节点的左子树，将其左节点作为当前节点进行搜索
    // 同理如果树节点值小于两节点值，则两节点都位于树节点的右子树，将其右节点作为当前节点进行搜索

    if(p.val>root.val && q.val>root.val){
      return lowestCommonAncestor(root.right,p,q)
    }else if(p.val<root.val && q.val<root.val){
      return lowestCommonAncestor(root.left,p,q)
    }else{
      // 一个比root大
      // 一个币root小
      return root
    }


};
var lowestCommonAncestor = function (root,p,q){
  while(root){
    if(p.val>root.val && q.val>root.val){
      root = root.right
    }else if(p.val<root.val && q.val<root.val){
      root = root.left
    }else{
      return root
    }

  }
}
// @lc code=end

