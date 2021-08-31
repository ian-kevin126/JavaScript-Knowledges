/**
 * 自平衡树：BST存在一个问题：取决于你添加的节点数，树的以便可能会非常深，也就是说，树的一条分支会有很多层，而其他的分支却只有几层。
 * 这会在需要在某条边上添加、移除或搜索某个节点时引起一些性能的问题。为了解决这个问题，有一种叫做 Adelson-Velskii-Landi 树（AVL树）。
 * AVL树是一种自平衡搜索树，意思是任何一个节点左右两侧子树的高度只差最多为1。AVL树在添加或移除节点时，会尽可能尝试转换为完全树。
 */

/**
 * 既然AVL树也是一个BST，我们可以扩展之前写的BST类，只需要覆盖用来维持AVL树平衡的方法，也就是insert、insertNode和removeNode方法，
 * 所有其他的BST方法将会被AVLTree类继承。在AVL树中插入或移除节点和BST完全相同，然而，AVL树的不同之处在于我们需要检验它的平衡因子。
 * 如果有需要，会将其逻辑应用于树的自平衡。
 */
import { Compare, defaultCompare } from "../code_source/util";
import { BinarySearchTree } from "./tree_basics";
import { Node } from "../code_source/data-structures/models/node";

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  /**
   * 左-左（LL）：向右的单旋转，这种情况出现于节点的左侧子节点的高度大于右侧子节点的高度时，并且左侧子节点也是平衡或左侧较重的。
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   * @param node Node<T>
   */
  rotationLL(node) {
    // 与平衡相关的三个节点是a、b、c码匠节点
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  /**
   * 右-右（RR）：向左的单旋转
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  /**
   * 左-右（LR）：向右的双旋转（先 LL 旋转，再 RR 旋转）
   * @param node Node<T>
   */
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  /**
   * 右-左（RL）：向左的双旋转（先 RR 旋转，再 LL 旋转）
   * @param node Node<T>
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  /**
   * 平衡因子：在AVL树中，需要对每个节点计算右子树和左子树高度之间的差值，该值应为0、-1、1，如果结果不为这三者中的一个，则需要平衡该AVL树。这就是平衡因子的概念。
   * @param {*} node
   * @returns
   */
  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // duplicated key
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // 左-左（LL）：向右的单旋转
        node = this.rotationLL(node);
      } else {
        // 左-右（LR）：向右的双旋转（先 LL 旋转，再 RR 旋转）
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // 右-右（RR）：向左的单旋转
        node = this.rotationRR(node);
      } else {
        // 右-左（RL）：向左的双旋转（先 RR 旋转，再 LL 旋转）
        return this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key); // {1}
    if (node == null) {
      return node;
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // Left left case
      if (
        this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.left) ===
          BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      // Left right case
      if (
        this.getBalanceFactor(node.left) ===
        BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // Right right case
      if (
        this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.right) ===
          BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      // Right left case
      if (
        this.getBalanceFactor(node.right) ===
        BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
