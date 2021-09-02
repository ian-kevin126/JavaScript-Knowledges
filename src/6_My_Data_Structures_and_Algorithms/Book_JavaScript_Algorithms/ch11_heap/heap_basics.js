/**
 * 上一章，我们学习了树数据结构，本章我们将学习一种特殊的二叉树：堆（也叫二叉堆）。二叉堆是计算机科学中一种非常著名的数据结构，
 * 由于它能高效、快速地找出最大值和最小值，常被应用于优先队列，它也被用于著名的堆排序算法中。
 *
 * - 完美二叉树：一个深度为k(>=-1)且有2^(k+1) - 1个结点的二叉树称为完美二叉树。通俗地讲：树是满的，还是二叉的。
 *                     A
 *                  /     \
 *                B         C
 *              /   \      /  \
 *             D     E    F     G
 *            / \   / \  / \   / \
 *           H   I J   K L M  N   O
 *
 * - 完全二叉树：完全二叉树从根结点到倒数第二层满足完美二叉树，最后一层可以不完全填充，其叶子结点都靠左对齐
 *                     A
 *                  /     \
 *                B         C
 *              /   \      /  \
 *             D     E    F     G
 *            / \   / \
 *           H   I J   K
 *
 * 注意：理解完全(Complete)二叉树可以借助于栈(stack)的思想。 例如，把第一个图中的完美(Perfect)二叉树的所有结点按照编号A, B, C, …, O依次入栈(push)。
 * 那么，对栈的每一次出栈(pop)操作后，栈里保存的结点集对应到图上去都是一棵完全(Complete)二叉树。
 *
 * - 完满二叉树：所有非叶子节点的度都是2，换句话说，只要你有孩子，你就必须是由两个孩子。
 *                     A
 *                   /   \
 *                  B     C
 *                /   \
 *               D     E
 *                    / \
 *                   J   K
 *
 * 二叉堆是一种特殊的二叉树，有以下两个特性：
 * - 1，它是一棵完全二叉树，表示树的每一层都有左、右两个子节点（除了最后一层的叶节点），并且最后一层的叶节点都是左侧子节点，这叫做结构特性。
 * - 2，二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值，所有的节点都大于等于（最大堆）或小于等于（最小堆）
 *      每个它的子节点，这叫做堆特性。
 *
 * 1，二叉树的数组表示
 *    二叉树有两种表示方式，第一种是使用一个动态的表示方式，也就是指针（用节点表示），在上一章使用过。第二种是使用一个数组，通过索引值检索父节点、左侧和右侧子节点的值。
 *
 *                  指针方式                             数组方式
 *
 *                     A(0)                           [1, 2, 3, 4, 5, 6, 7]
 *                  /     \                     index  0  1  2  3  4  5  6
 *                B(1)      C(2)
 *              /   \      /  \
 *             D(3)  E(4) F(5) G(6)
 *
 * 要访问使用普通数组的二叉树节点，可以使用下面的方式操作index：
 * 对于给定位置的index的节点：
 * - 它的左侧子节点的位置是 2*index + 1（如果位置可用）；
 * - 它的右侧子节点的位置是 2*index + 2（如果位置可用）；
 * - 它的父节点的位置是 index / 2（如果位置可用）；
 */

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
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

/**
 * 最小堆
 */
class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  // 获取左侧子节点的位置
  getLeftIndex(index) {
    return 2 * index + 1;
  }

  // 获取右侧子节点的位置
  getRightIndex(index) {
    return 2 * index + 2;
  }

  // 获取父节点的位置
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  /**
   * 我们可以在堆数据结构上进行三个主要操作：
   * - insert(value)：这个方法向堆中插入一个新的值，如果成功，返回true，否则返回false
   * - extract()：这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值
   * - findMinimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值
   */

  /**
   * 向堆中插入值：是指将值插入堆的底部叶节点（数组的最后一个位置），再执行 shiftUp 操作，表示我们要将这个值和它的父节点进行交换，直到父节点小于这个插入的值。
   * 这个上移操作也被称为 up head、percolate up、bubble up、heapify up 或 cascade up。
   */

  insert(value) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  // 上移操作
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) ===
        Compare.BIGGER_THAN
    ) {
      // 在最小堆中，如果插入的值小于它的父节点，那么就交换这两个节点，然后继续上移，直到找到一个正确的位置。
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  // 下移操作
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) ===
        Compare.BIGGER_THAN
    ) {
      // 如果元素比左子节点大，就交换元素和它的左子节点
      element = left;
    }

    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) ===
        Compare.BIGGER_THAN
    ) {
      // 如果元素比右子节点大，就交换元素和它的右子节点
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      // 重复这个过程
      this.siftDown(element);
    }
  }

  // 移除堆中最小值，并返回这个值
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  heapify(array) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }

  getAsArray() {
    return this.heap;
  }
}

const heap = new MinHeap();
heap.insert(12);
heap.insert(23);
heap.insert(34);
heap.insert(5);
heap.insert(1);
heap.insert(7);
heap.insert(6);

console.log(heap.getAsArray()); // [1, 5, 6, 23, 12, 34, 7]
heap.extract();
console.log(heap.getAsArray()); // [5, 7, 6, 23, 12, 34]

/**
 * 最大堆
 */

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(12);
maxHeap.insert(23);
maxHeap.insert(34);
maxHeap.insert(5);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(6);

console.log(maxHeap.getAsArray()); // [34, 12, 23, 5, 1, 7, 6]
maxHeap.extract();
console.log(maxHeap.getAsArray()); // [23, 12, 7, 5, 1, 6]
