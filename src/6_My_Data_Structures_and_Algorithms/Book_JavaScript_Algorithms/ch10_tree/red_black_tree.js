/**
 * 红黑树：是一种自平衡的二叉查找树，它主要是为了解决不平衡的二叉查找树效率不高的缺点。红黑树保证了从根到叶子节点的最长路径不会超过最短路径的两倍。
 *
 * 树在前端的重要性不言而喻，随处可见，vdom、dom树、render树，有时候前后端交互中也会收到具有递归性质的tree结构数据，需要注意一点的是，ES6中虽然出现
 * 了Set和Map数据结构，但其实现和其他语言（例如Java）的底层实现不同，在Chrome的V8中其实现基于Hash，利用空间换时间的思想，毕竟查找起来Hash是O(1)而
 * 红黑树是O(lgN)。但是红黑树作为一种经典且重要的数据结构，综合优势比较好，curd操作以及空间消耗在大量数据下优势就体现出来了。
 *
 * 红黑树的具体规则：
 * - 1，节点是红色或黑色
 * - 2，根节点是黑色
 * - 3，每个叶子节点都是黑色的空节点（NIL节点）
 * - 4，每个红色节点的两个子节点都是黑色（从每个叶子节点到根节点的所有路径上不能有两个连续的红色节点）
 * - 5，不能有两个响铃的红色节点，一个红节点不能有红的父节点或子节点
 * - 6，从任意节点到其每个叶子节点的所有路径都包含相同数目的黑色节点
 *
 * https://mp.weixin.qq.com/s?__biz=MzI1MTIzMzI2MA==&mid=2650561574&idx=1&sn=edab54460a85c9686e0ec0f5d178907c&chksm=f1feeaa5c68963b3689d23db68ab14a9c50a33dd5e9244a74d7765321b42af7ec14abfadf9ac&scene=21#wechat_redirect
 * https://cloud.tencent.com/developer/article/1101517
 */
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

const Colors = {
  RED: "RED",
  BLACK: "BLACK",
};

class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }

  toString() {
    return `${this.key}`;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = undefined;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

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

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // key is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    if (node.left == null && node.right == null) {
      node = undefined;
      return node;
    }
    // case 2
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // case 3
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      // 如果树是空的，那么我们需要创建一个红黑树节点
      this.root = new RedBlackNode(key);
      // 默认情况下创建的节点是红色的，但是为了满足红黑树的根节点是黑色这个规则，我们将这个节点的颜色置为黑色
      this.root.color = Colors.BLACK;
    } else {
      // 如果树不是空的，那就在正确的位置上插入节点，这种情况下，insertNode方法需要返回新插入的节点，这样我们可以验证插入后，红黑树的规则是否得到了满足
      const newNode = this.inserNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node; // 保存指向被插入节点父节点的引用
        return node.left; // 返回节点的应用，用于在后面验证树的属性
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  /**
   * 规则验证：在插入节点后验证红黑树的属性是否还是平衡的以满足它的所有规则，需要使用到两个概念：重新填色和旋转。
   *
   * 在向树中插入节点后，新节点将会是红色。这不会影响黑色节点数量的规则（规则6），但是会影响规则5：两个后代红色节点不能共存。如果插入节点的父节点是黑色的
   * 那没问题，但是如果插入节点的父节点是红色的，那么会违反规则5.要解决这个冲突，我们只需要改变父节点、祖父节点和叔节点（因为我们同样改变了父节点的颜色）。
   */
  fixTreeProperties(node) {
    while (
      node &&
      node.parent &&
      node.parent.color.isRed() &&
      node.color !== Colors.BLACK
    ) {
      // 为了保证代码的可读性，我们要保存父节点和祖父节点的引用
      let parent = node.parent;
      const grandParent = parent.parent;
      // 情形A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // 情形1A：叔节点也是红色——只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形2A：节点是右侧子节点——左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形3A：节点是左侧子节点——右旋转
          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // 情形B：父节点是右侧子节点
        const uncle = grandParent.left;
        // 情形1B：叔节点是红色，只需要重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情形2B：节点是左侧子节点——右旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // 情形3B：节点是右侧子节点——左旋转
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    // 为了保证根节点的颜色始终是黑色（规则 2），我们在代码最后设置根节点的颜色
    this.root.color = Colors.BLACK;
  }

  // 左-左（LL）：父节点是祖父节点的左侧子节点，节点是父节点的左侧子节点（情形 3A）。
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  // 右-右（RR）：父节点是祖父节点的右侧子节点，节点是父节点的右侧子节点（情形 2A）。
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
