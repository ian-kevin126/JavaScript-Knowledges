/**
 * Given a binary tree, write a function to get the maximum width of the given tree.
 * The width of a tree is the maximum width among all levels. The binary tree has the
 * same structure as a full binary tree, but some nodes are null.
 *
 * The width of one level is defined as the length between the end-nodes (the leftmost
 * and right most non-null nodes in the level, where the null nodes between the end-nodes
 * are also counted into the length calculation.
 *
 * Example 1:
 * Input:
 *
 *            1
 *          /   \
 *         3     2
 *        / \     \
 *       5   3     9
 *
 * Output: 4
 * Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
 * Example 2:
 * Input:
 *
 *           1
 *          /
 *         3
 *        / \
 *       5   3
 *
 * Output: 2
 * Explanation: The maximum width existing in the third level with the length 2 (5,3).
 * Example 3:
 * Input:
 *
 *           1
 *          / \
 *         3   2
 *        /
 *       5
 *
 * Output: 2
 * Explanation: The maximum width existing in the second level with the length 2 (3,2).
 * Example 4:
 * Input:
 *
 *           1
 *          / \
 *         3   2
 *        /     \
 *       5       9
 *      /         \
 *     6           7
 *
 * Output: 8
 * Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
 *
 *
 * Note: Answer will in the range of 32-bit signed integer.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = root => {
  if (!root) {
    return 0;
  }

  const q1 = [root];
  const q2 = [0];
  let max = 1;

  while (q1.length > 0) {
    const size = q1.length;
    let left = 0;
    let right = 0;

    for (let i = 0; i < size; i++) {
      const node = q1.shift();
      const index = q2.shift();

      if (i === 0) {
        left = index;
      }

      if (i === size - 1) {
        right = index;
      }

      if (node.left) {
        q1.push(node.left);
        q2.push(index * 2);
      }

      if (node.right) {
        q1.push(node.right);
        q2.push(index * 2 + 1);
      }
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};

export default widthOfBinaryTree;
