// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//
// Example:
//
//
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:
//
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
//
//


/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        queue<TreeNode*> q[2];
        vector<int> res;
        if (!root) return res;

        int l = 0;
        q[0].push(root);
        while (!q[0].empty() || !q[1].empty()) {
            while (!q[l].empty()) {
                TreeNode *temp = q[l].front();
                q[l].pop();
                if (temp->left) q[1-l].push(temp->left);
                if (temp->right) q[1-l].push(temp->right);
                if (q[l].empty()) res.push_back(temp->val);
            }
            l = 1-l;
        }
        return res;
    }
};

