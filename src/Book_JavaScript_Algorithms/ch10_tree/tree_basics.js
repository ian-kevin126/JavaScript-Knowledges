/**
 * 树：之前介绍的数据结构第一个非顺序数据结构是散列表，现在我们将学习另一种非顺序数据结构——树；树是一种分层数据的抽象模型，现实生活中最常见的树的例子
 * 是家谱或是公司的组织架构。
 *
 * 树的一些概念：
 * - 根节点：树顶部的节点
 * - 叶节点：最底层的节点
 * - 深度：祖先节点的数量，根节点的深度处于第0层，深度为0
 *
 * 二叉树：节点最多只能有两个子节点：一个左侧子节点，另一个是右侧子节点。这个定义有助于我们写出更高效地在树中插入、查找和删除节点的算法。
 *
 * 二叉搜索树（BST）：是二叉树的一种，但是只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。
 *
 */

class TreeNode {
  constructor(key) {
    this.key = key; // 节点值
    this.left = null; // 左侧子节点引用
    this.right = null; // 右侧子节点引用
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
  }

  insertNode(node, key) {
    if (defaultCompare(key, node.key) === Compare.LESS_THAN) {
      // 1，如果新节点的键小于当前节点的键，那么需要检查当前节点的左侧子节点
      // 注意这里：由于键可能是复杂的对象而不是数，我们使用函数来比较。
      if (node.left == null) {
        // 2，如果左侧子节点为空，则直接插入左子节点
        node.left = new TreeNode(key);
      } else {
        // 3，如果左子节点不为空，则继续递归比较，直到插入到树中正确的位置
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  // 向树中插入一个新的键
  insert(key) {
    if (this.root == null) {
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  // 在树中查找一个键，如果节点存在，则返回true，如果不存在，则返回false
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (defaultCompare(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (defaultCompare(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 返回树中最小的值/键
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current.key;
  }

  min1() {
    return this.minNode1(this.root);
  }

  minNode1(node) {
    if (node.left != null) {
      return this.minNode1(node.left);
    } else {
      return node.key;
    }
  }

  // 返回树中最大的值/键
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current.key;
  }

  // 从树中移除某个节点
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      // 如果正在检测的节点为null，那么说明该节点并不在树中，直接返回null
      return null;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果不为null，我们需要在树中找到要移除的键，因此，如果要找的键比当前节点的值小，就沿着树的左边找到下一个节点
      node.left = this.removeNode(node.left, key);
      return node; // {5}
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 如果要找的键比当前节点的值大，那么就沿着树的右边找到下一个节点，也就是说我们要分析它的子树
      node.right = this.removeNode(node.right, key);
      return node; // {8}
    } else {
      // 如果我们找到了要找的键（键等于 node.key），就需要处理三种不同的情况
      // 第一种情况：移除一个叶节点
      if (node.left == null && node.right == null) {
        // 一个没有左侧和右侧子节点的叶节点，直接赋予这个这个节点null值来实现移除。
        node = null;
        // 但是，当我们学习了链表之后，我们知道仅仅赋予一个null值是不够的，还需要处理引用（指针），在这里，这个节点没有任何子节点，
        // 但是它有一个父节点需要通过返回null来将对应的父节点指针赋予null值
        // 现在节点的值已经是null了，父节点指向它的指针也会接收到这个值，这也是我们为什么要在函数中返回节点的值的原因。父节点总是会接收到函数的返回值
        // 另一种可行的办法是将父节点和节点本身都作为参数传入方法内部。
        return node;
      }
      // 第二种情况：移除有一个左侧或右侧子节点的节点
      // 这种情况下，需要跳过这个节点，直接将父节点的指针指向它的子节点
      if (node.left == null) {
        // 如果这个节点没有左侧子节点，也就是说它有一个右侧子节点，因此我们把它的引用改为对它右侧子节点的引用
        node = node.right;
        return node; // 返回更新后的节点
      } else if (node.right == null) {
        // 如果这个节点没有右侧子节点，也就是说它有一个左侧子节点，因此我们把它的引用改为对它左侧子节点的引用
        node = node.left;
        return node; // 返回更新后的节点
      }
      // 第三种情况：移除有两个子节点的节点
      // 这也是最复杂的情况，那就是要移除的节点有两个子节点——左侧子节点和右侧子节点，需要如下四个步骤：

      // 1，当找到了要移除的节点后，需要找到它右边子树中最小的节点（它的继承者）。
      const aux = this.minNode(node.right);
      // 2，然后，用它右侧子树中最小的节点的键去更新这个节点的值，通过这一步，我们改变了这个节点的键，也就是说它被移除了。
      node.key = aux.key;
      // 3，但是，这样在树中就有两个拥有相同键的节点了，这显然不行，要继续把右侧子树中的最小节点移除，比较它已经被移到了刚刚删除的节点的位置。
      node.right = this.removeNode(node.right, aux.key);
      // 4，最后，向它的父节点返回更新后节点的引用。
      return node;
    }
  }
}

const tree = new BinarySearchTree();
const printNode = (value) => console.log(value);
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
// tree.inOrderTraverse(printNode); // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
// tree.preOrderTraverse(printNode); // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
// tree.postOrderTraverse(printNode); // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log(tree.min1()); // 3
console.log(tree.max()); // 25
console.log(tree.search(1) ? "Key 1 found." : "Key 1 not found."); // Key 1 not found.
console.log(tree.search(8) ? "Key 8 found." : "Key 8 not found."); // Key 8 found.
