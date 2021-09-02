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
   * 左-左（LL）：向右的单旋转——这种情况出现于节点的左侧子节点的高度大于右侧子节点的高度时，并且左侧子节点也是平衡或左侧较重的。
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   * @param node Node<T>
   */
  rotationLL(node) {
    // 1，与平衡相关的三个节点是a、b、c，将节点a置于节点b的位置，a的左子树保持不变，tmp就是a节点，node就是b节点
    const tmp = node.left;
    // 2，然后将节点a子节点中最大的键（右子节点）移动到b的左子树上
    node.left = tmp.right;
    // 3，再重新将a的右子节点重置为b
    tmp.right = node;
    return tmp;
  }

  /**
   * 右-右（RR）：向左的单旋转——这种情况出现于右侧子节点的高度大于左侧子节点的高度，并且右侧子节点也是平衡或者右侧较重的。与左-左相反
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   * @param node Node<T>
   */
  rotationRR(node) {
    // 1，与平衡相关的节点有三个a，b，e，将节点b置于节点a的位置，tmp是节点b，node是a
    const tmp = node.right;
    // 2，将节点b子节点中最小的键（左子节点）移动到节点a的右子节点上
    node.right = tmp.left;
    // 3，再重新将b的左子节点重置为a
    tmp.left = node;
    return tmp;
  }

  /**
   * 左-右（LR）：向右的双旋转（先 LL 旋转，再 RR 旋转）——这种情况出现于左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重（因此称之为左-右）。
   *
   *       b                           b
   *      / \                         / \
   *     a   e -> rotationLL(a) ->   d   e   -> rotationRR(a) ->      d
   *    / \                         / \                             /   \
   *   c   d                       a   g                           a     b
   *      / \                     / \                             / \   / \
   *     f   g                   c   f                           c   f g   e
   *
   * @param node Node<T>
   */
  rotationLR(node) {
    // 1，先做一次LL旋转
    node.left = this.rotationRR(node.left);
    // 2，再做一次RR旋转
    return this.rotationLL(node);
  }

  /**
   * 右-左（RL）：向左的双旋转（先 RR 旋转，再 LL 旋转）——这种情况和做-右相反，出现于右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重（因此称为右-左）。
   *
   *     a                              a
   *    / \                            / \
   *   c   b   -> rotationRR(b) ->    c   d   -> rotationLL(a) ->       d
   *      / \                            / \                          /   \
   *     d   e                          f   b                        a     b
   *    / \                                / \                      / \   / \
   *   f   g                              g   e                    c   f g   e
   *
   * @param node Node<T>
   */
  rotationRL(node) {
    // 1，先做一次RR旋转
    node.right = this.rotationLL(node.right);
    // 2，再做一次LL旋转
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

  // 向AVL树插入节点
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  // 向AVL树插入节点和在BST中是一样的，除了插入节点外，我们还要验证插入后的树是否还是平衡的，如果不是，就要进行比较的旋转操作。
  insertNode(node, key) {
    // 插入操作和BST是一样的
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的键
    }

    // 检查树是否平衡，因此要使用递归计算每个插入树的节点为根的平衡因子，然后对每种情况应用正确的旋转。
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // 1，如果在向左子树插入节点后不平衡了，我们需要比较是否插入的键小于左侧子节点的键
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // （1）如果是，则进行左-左（LL）：向右的单旋转
        node = this.rotationLL(node);
      } else {
        // （2）如果不是，进行左-右（LR）：向右的双旋转（先 LL 旋转，再 RR 旋转）
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // 2，如果在向右子树插入节点后不平衡了，我们需要比较是否插入的键大于右侧子节点的键
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // （1）如果是，则进行右-右（RR）：向左的单旋转
        node = this.rotationRR(node);
      } else {
        // （2）如果不是，则进行右-左（RL）：向左的双旋转（先 RR 旋转，再 LL 旋转）
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
