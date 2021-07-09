/**
 * 树：一种非线性的数据结构，以分层的方式存储数据，它对存储需要快速查找的数据非常有用。树又有很多子集，比如二叉树、二叉搜索树、2-3树、红黑树等。
 *
 * 树相比于数组、链表、哈希表的优势：
 *  - 数组
 *    + 优点：可以通过下标值访问，效率高；
 *    + 缺点：查找数据时需要先对数据进行排序，生成有序数组，才能提高查找效率；并且在插入和删除元素时，需要大量的位移操作。
 *  - 链表
 *    + 优点：数据的插入和删除操作效率很高
 *    + 缺点：查找效率低，需要从头开始依次查找，直到找到目标数据为止，当需要在链表中间插入或删除数据时，插入或删除的效率都不高。
 *  - 哈希表
 *    + 优点：哈希表的插入、查询、删除效率都非常高
 *    + 缺点：空间利用率不高，底层使用的数组中又很多单元没有被充分利用；并且哈希表中的元素是无序的，不能按照固定顺序遍历哈希表中的元素；而且不能快速找出哈希表中最大值或最小值这些特殊值。
 *  - 树：
 *    + 优点：树综合了上述三种数据结构的优点，同时也弥补了它们存在的缺点（虽然效率不一定都比它们高），比如树结构中数据都是有序的，查找效率高；并且可以快速获取到最大值和最小值。
 *
 * https://www.cnblogs.com/jaxu/p/11309385.html
 * https://www.yuque.com/docs/share/a71bb492-8ab2-4015-8a47-8a86fcde97dd?# 《1、二叉树》
 */

/**
 * 二叉树：树的节点可以有 0 个或多个子节点，当一棵树（的所有节点）最多只能有两个子节点时，这样的数被称为二叉树。
 *  - 节点：树的一个元素
 *  - 叶子：度为0的节点
 *  - 层： 根在第一层，以此类推
 *  - 节点的度：节点拥有的子树的个数，二叉树的度不大于2
 *  - 树的度：树中的最大节点度数
 *  - 高度：叶子节点的高度为1，根节点的高度最高
 *
 * 二叉树分类：
 *  - 完满二叉树：除去叶节点，每个节点都有两个子节点
 *  - 完全二叉树：除了最深一层之外，其余所有层的节点都必须有两个子节点
 *  - 完美二叉树：满足完全二叉树的性质，即满二叉树，树的叶子节点均在最后一层
 */

/**
 * 二叉树的遍历
 *              A
 *           /     \
 *         B          C
 *       /   \      /   \
 *      D     E    F     G
 *    /   \
 *   H     I
 *
 * 前序遍历： 首先，遍历根节点； 然后，遍历其左子树； 最后，遍历其右子树； —— A B D H I E C F G
 * 中序遍历:  首先，遍历其左子树； 然后，遍历根（父）节点； 最后，遍历其右子树； —— H D I B E A F C G
 * 后序遍历： 首先，遍历其左子树子节点，再父节点； 然后，遍历其右子树； 最后，遍历根（父）节点； —— H I D E B F G C A
 * 层序遍历： 先打印父节点的，再打印子节点的，自上而下层层打印； —— A B C D E F G H I
 *
 * https://www.yuque.com/docs/share/11ab79b9-5a19-4709-a295-2031cb9ea157?# 《2、二叉搜索树》
 */

/**
 * BST的 function 实现
 */
function BinarySearchTree() {
  // 属性
  this.root = null;

  // 节点生成构造函数
  function Node(key, value = null) {
    this.key = key;
    this.value = value;
    this.right = null;
    this.left = null;
  }

  // 向二叉树中插入数据
  BinarySearchTree.prototype.insert = function (key, value = null) {
    // 1、创建节点
    let node = new Node(key, value);
    // 2、判断根节点是否存在
    // 2-1、不存在
    if (!this.root) {
      this.root = node;
      return;
    }

    // 2-2、存在
    this.insertNode(this.root, node);
  };

  // 插入节点函数（内部）
  BinarySearchTree.prototype.insertNode = function (oldNode, newNode) {
    // 判断我们插入的数据的 key 是否大于父节点的 key
    if (newNode.key < oldNode.key) {
      // 若 newNode 的 key 小于父节点的 key ，再判断父节点的子节点是否为空
      if (oldNode.left === null) {
        // 若左子节点为空，直接将新节点插入左子节点
        oldNode.left = newNode;
      } else {
        // 左子节点不为空，继续向下找到左子节点为空的节点进行插入
        this.insertNode(oldNode.left, newNode);
      }
    } else {
      // 若 newNode 的 key 大于父节点的 key ，再判断父节点的右子节点是否为空
      if (oldNode.right === null) {
        // 若右子节点为空，直接将新节点插入右子节点
        oldNode.right = newNode;
      } else {
        // 右子节点不为空，继续向下找到右子节点为空的节点进行插入
        this.insertNode(oldNode.right, newNode);
      }
    }
  };

  // 先序遍历并返回结果（外部函数）
  BinarySearchTree.prototype.preOrder = function (handle) {
    this.preOrderNodes(this.root, handle);
  };

  // 以先序遍历的方式遍历整个树（内部函数）
  BinarySearchTree.prototype.preOrderNodes = function (node, handle) {
    if (node !== null) {
      handle(node.key);
      this.preOrderNodes(node.left, handle);
      this.preOrderNodes(node.right, handle);
    }
  };

  // 中序遍历并返回结果（外部函数）
  BinarySearchTree.prototype.inOrder = function (handle) {
    this.inOrderNodes(this.root, handle);
  };

  // 以中序遍历的方式遍历整个树（内部函数）
  BinarySearchTree.prototype.inOrderNodes = function (node, handle) {
    if (node !== null) {
      this.inOrderNodes(node.left, handle);
      handle(node.key);
      this.inOrderNodes(node.right, handle);
    }
  };

  // 后序遍历并返回结果（外部函数）
  BinarySearchTree.prototype.postOrder = function (handle) {
    this.postOrderNodes(this.root, handle);
  };

  // 以后序遍历的方式遍历整个树（内部函数）
  BinarySearchTree.prototype.postOrderNodes = function (node, handle) {
    if (node !== null) {
      this.postOrderNodes(node.left, handle);
      this.postOrderNodes(node.right, handle);
      handle(node.key);
    }
  };

  // 获取二叉树中的最大值
  BinarySearchTree.prototype.getMax = function () {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  };

  BinarySearchTree.prototype.getMin = function () {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  };

  // 查找指定的 key 对应的数据
  BinarySearchTree.prototype.search = function (key) {
    let node = this.root;

    while (node !== null) {
      if (key > node.key) {
        node = node.right;
      } else if (key < node.key) {
        node = node.left;
      } else {
        return node.value;
      }
    }

    return false;
  };

  // 删除指定的 key 的数据
  BinarySearchTree.prototype.remove = function (key) {
    this.node = this.root;
    this.parent = null;
    let direction = "";

    // 1、找到需要被删除的节点
    while (node !== null) {
      if (key < node.key) {
        parent = node;
        direction = "left";
        node = node.left;
      } else if (key > node.right) {
        parent = node;
        direction = "right";
        node = node.right;
      } else {
        break;
      }
    }

    // 1-1、未找到对应节点，删除失败
    if (node === null) return false;

    // 1-2、找到对应节点
    // 2、判断节点类型（叶子节点、只有一个子节点、有两个子节点）

    // 2-1、节点类型为叶子节点
    if (node.left === null && node.right === null) {
      if (node === this.root) {
        // 如果是根节点，直接置空
        this.root = null;
      } else {
        // 如果是子节点，则将对应的direction的节点置空
        parent[direction] = null;
      }
    } else if (node.left === null) {
      // 2-2、节点只有一个右子节点

      if (node === this.root) {
        this.root = this.root.right;
      } else {
        parent[direction] = node.right;
      }
    } else {
      let minNode = node.right;
      let minNode_parent = node;
      // 2.3.1 找到被删除节点右子节点的子孙节点中最小的节点
      while (minNode.left !== null) {
        minNode_parent = minNode;
        minNode = minNode.left;
      }

      // 2.3.2 判断 minNode是否有右子节点
      // 2.3.2.1 无右子节点
      if (minNode.right === null) {
        if (node === this.root) {
          this.root = minNode;
        } else {
          parent[direction] = minNode;
        }
        minNode.left = node.left;
        minNode.right = node.right;
        minNode_parent.left = null;
      }

      // 2.3.2.2 有右子节点
      else {
        if (node === this.root) {
          this.root = minNode;
        } else {
          parent[direction] = minNode;
        }
        minNode_parent.left = minNode.right;
        minNode.left = node.left;
        minNode.right = node.right;
      }
    }
  };
}

/**
 * DFS：深度优先遍历：也就是将左子树搜索完后没有发现目标值，再去搜索右子树；
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = c;
c.left = f;
b.left = d;
a.right = b;
b.right = e;
c.right = g;

/**
 * 二叉树深度优先搜索
 * @param {*} root    开始值//根节点
 * @param {*} target  目标值
 * @returns
 */
function f1(root, target) {
  if (root == null || target == null) return false;
  if (root.value == target) {
    return true;
  }
  var left = f1(root.left, target);
  var right = f1(root.right, target);
  return left || right;
}

console.log(f1(a, "o"));

function DepthFirstSearch(biTree) {
  let stack = [];
  stack.push(biTree);
  while (stack.length != 0) {
    let node = stack.pop();
    console.log(node.data);
    if (node.rChild) {
      stack.push(node.rChild);
    }
    if (node.lChild) {
      stack.push(node.lChild);
    }
  }
}

/**
 * BFS：广度优先遍历：同一行的搜索完后再去搜索下一行
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = c;
c.left = f;
b.left = d;
a.right = b;
b.right = e;
c.right = g;

/**
 * 广度优先搜搜
 * @param {*} rootList  查询列表
 * @param {*} target  目标值
 * @returns
 */
function f1(rootList, target) {
  if (rootList == null || rootList.length == 0) return false;
  var childList = [];
  for (let i = 0; i < rootList.length; i++) {
    if (rootList[i].value != null) return false;
    if (rootList[i] != null && rootList[i].value == target) {
      return true;
    } else {
      childList.push(rootList[i].left);
      childList.push(rootList[i].right);
    }
  }
  return f1(childList, target);
}

console.log(f1([a], "o"));

function BreadthFirstSearch(biTree) {
  let queue = [];
  queue.push(biTree);
  while (queue.length != 0) {
    let node = queue.shift();
    console.log(node.data);
    if (node.lChild) {
      queue.push(node.lChild);
    }
    if (node.rChild) {
      queue.push(node.rChild);
    }
  }
}
