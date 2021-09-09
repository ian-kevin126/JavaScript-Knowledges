// 复习参考地址：https://xpoet.cn/2020/07/JavaScript%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%93%E8%BE%91%EF%BC%89/

/**
 * 栈的应用
 * @param {}} num
 * @returns
 */
const decToBinary = (num) => {
  let stack = [];
  let dec = num;
  let resStr = "";

  while (dec) {
    stack.push(dec % 2);
    dec = Math.floor(dec / 2);
  }

  while (stack.length) {
    resStr += stack.pop();
  }

  return resStr;
};

console.log(decToBinary(10));

const decToOtherScale = (num, s) => {
  let stack = [];
  let dec = num;
  let resStr = "";

  while (dec) {
    stack.push(dec % s);
    dec = Math.floor(dec / s);
  }

  while (stack.length) {
    resStr += stack.pop();
  }

  return resStr;
};

console.log(decToOtherScale(1000, 8));

/**
 * 队列
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.toString();
  }
}

const hotPotato = (list, num) => {
  const _list = JSON.parse(JSON.stringify(list));
  let queue = new Queue();

  let len = _list.length;

  for (let i = 0; i < len; i++) {
    queue.enqueue(_list[i]);
  }

  while (queue.size() > 1) {
    for (let j = 0; j < num - 1; j++) {
      queue.enqueue(queue.dequeue(_list[j]));
    }
    queue.dequeue();
  }

  return _list.indexOf(queue.front());
};

const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = hotPotato(names, 4);
console.log("击鼓传花", names[targetIndex]); // 击鼓传花 lily

/**
 * 优先队列
 */
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;

      for (let i = 0; i < this.items.length; i++) {
        // 值越小优先级越大
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    return super.dequeue();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
  }

  front() {
    return super.front();
  }

  toString() {
    let resultString = "";

    for (const { element, priority } of this.items) {
      resultString += `${element}-${priority}` + "\n";
    }

    return resultString;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 15);
priorityQueue.enqueue("C", 11);
priorityQueue.enqueue("D", 20);
priorityQueue.enqueue("E", 18);
priorityQueue.enqueue("F", 10);
console.log(priorityQueue.items);

/**
 * 单向链表
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  getCurrentElement(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  insert(data, position) {
    if (position < 0 || position > this.length) return false;
    const node = new Node(data);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.getCurrentElement(position - 1);
      let current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return node;
  }

  getData(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    return current.val;
  }

  indexOf(data) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (data === current.val) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  update(position, data) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }
    const current = this.getCurrentElement(position);
    current.val = data;
  }

  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return false;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = this.getCurrentElement(position - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.length--;

    return current;
  }

  remove(data) {
    return this.removeAt(this.indexOf(data));
  }

  toString() {
    let resultString = "";

    let current = this.head;

    while (current) {
      resultString += current.val + "-";
      current = current.next;
    }

    return resultString;
  }
}

const linkedList = new LinkedList();
// 测试 append 方法
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
linkedList.insert("D", 2);
linkedList.insert("E", 4);
linkedList.insert("F", 5);
console.log(linkedList.toString()); // A-B-D-C-E-F-
console.log(linkedList.getData(0)); // A
console.log(linkedList.indexOf("E")); // 4
console.log(linkedList.indexOf("G")); // undefined
linkedList.update(1, "T");
console.log(linkedList.toString()); // A-T-D-C-E-F-
linkedList.remove("C");
linkedList.removeAt(0);
console.log(linkedList.toString()); // T-D-E-F-

/**
 * 双向链表
 */
class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element) {
    const node = new DoublyNode(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return true;
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let current = this.head;
    const node = new DoublyNode(element);

    if (position === 0) {
      if (this.head == null) {
        node.next = current;
        current.prev = node;
        this.head = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      let previous = this.getElement(position - 1);
      current = previous.next;
      previous.next = node;
      node.next = current;
      current.prev = node;
      node.prev = previous;
    }

    this.length++;

    return true;
  }

  getElement(position) {
    if (position < 0 || position > this.length - 1) {
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < position; i++) {
      current = current.next;
    }

    return current;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.val === element) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }

  update(position, element) {
    const _node = this.getElement(position);
    _node.val = element;
  }

  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return undefined;
    }

    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = current.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      let previous = this.tail.prev;
      current = this.tail;
      previous.next = null;
      this.tail = previous;
    } else {
      let previous = this.getElement(position - 1);
      current = previous.next;
      let nextNode = current.next;

      previous.next = nextNode;
      nextNode.prev = previous;

      // let targetIndex = 0;
      // let previousNode = null;
      // while (targetIndex++ < position) {
      //   previousNode = current;
      //   current = current.next;
      // }

      // previousNode.next = current.next;
      // current.next.perv = previousNode;
    }

    this.length--;
    return current.val;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
  // forwardToString() 链表数据从前往后以字符串形式返回
  forwardToString() {
    let currentNode = this.head;
    let result = "";

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.val + "--";
      currentNode = currentNode.next;
    }

    return result;
  }

  // backwardString() 链表数据从后往前以字符串形式返回
  backwardString() {
    let currentNode = this.tail;
    let result = "";

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.val + "--";
      currentNode = currentNode.prev;
    }

    return result;
  }
}

const doublyLinkedList = new DoublyLinkedList();

// append() 测试
doublyLinkedList.append("ZZ");
doublyLinkedList.append("XX");
doublyLinkedList.append("CC");
console.log(doublyLinkedList.forwardToString()); // ZZ--XX--CC--

// insert() 测试
doublyLinkedList.insert(0, "00");
doublyLinkedList.insert(2, "22");
console.log(doublyLinkedList.forwardToString()); // 00--ZZ--22--XX--CC--

// getData() 测试
console.log(doublyLinkedList.getElement(1)); //--> ZZ

// indexOf() 测试
console.log(doublyLinkedList.indexOf("XX")); //--> 3
console.log(doublyLinkedList);

// removeAt() 测试
doublyLinkedList.removeAt(0);
doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.forwardToString()); // ZZ--XX--CC--

// update() 测试
doublyLinkedList.update(0, "111111");
console.log(doublyLinkedList.forwardToString()); // 111111--XX--CC--

// remove() 测试
console.log(doublyLinkedList.remove("111111"));
console.log(doublyLinkedList.remove("22222"));
console.log(doublyLinkedList.forwardToString()); // XX--CC--

// backwardString() 测试
console.log(doublyLinkedList.backwardString()); // CC--XX--

/**
 * 集合
 */
class Set {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (this.has(value)) {
      return false;
    }
    this.items[value] = value;
    return true;
  }

  remove(value) {
    if (!this.has(value)) return false;
    delete this.items[value];
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  // 并集
  union(otherSet) {
    let newSet = new Set();

    for (const value of this.values()) {
      newSet.add(value);
    }

    for (const value of otherSet.values()) {
      newSet.add(value);
    }

    return newSet;
  }

  // 交集
  interSection(otherSet) {
    let newSet = new Set();

    for (const value of this.values()) {
      if (otherSet.has(value)) {
        newSet.add(value);
      }
    }

    return newSet;
  }

  // 差集
  difference(otherSet) {
    let newSet = new Set();

    for (const value of this.values()) {
      if (!otherSet.has(value)) {
        newSet.add(value);
      }
    }

    return newSet;
  }

  // 子集
  subSet(otherSet) {
    for (const value of this.values()) {
      if (!otherSet.has(value)) {
        return false;
      }
    }

    return true;
  }
}

const set = new Set();

// add() 测试
set.add("abc");
set.add("abc");
set.add("123");
set.add("zxc");
console.log(set); //--> {items: {123: "123", abc: "abc", zxc: "zxc"}}

// has() 测试
console.log(set.has("123")); //--> true
console.log(set.has("456")); //--> false

// remove() 测试
set.remove("abc");
console.log(set); //--> {items: {123: "123", zxc: "zxc"}}

// size() 测试
console.log(set.size()); //--> 2

// values() 测试
console.log(set.values()); //--> ["123", "zxc"]

// clear() 测试
set.clear();
console.log(set.values()); //--> []

/**
 * 字典
 */
class Map {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (!this.has(key)) return false;
    delete this.items[key];
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }
}

const map = new Map();

// set() 测试
map.set("name", "XPoet");
map.set("age", 18);
map.set("email", "i@xpoet.cn");
console.log(map); // {items: {name: "XPoet", age: 18, email: "i@xpoet.cn"}}

// has() 测试
console.log(map.has("name")); //--> true
console.log(map.has("address")); //--> false

// remove() 测试
map.remove("name");
console.log(map); // {age: 18, email: "i@xpoet.cn"}

// get() 测试
console.log(map.get("age")); //--> 18

// keys() 测试
console.log(map.keys()); //--> ["age", "email"]

// values() 测试
console.log(map.values()); //--> [18, "i@xpoet.cn"]

// size() 测试
console.log(map.size()); //--> 2

/**
 * 哈希表
 */

// 使用霍纳法则计算hashcode的值，通过取余操作实现哈希化
function hashFn(string, limit = 7) {
  // 子集采用的一个质数（无强制要求，质数即可）
  const PRIME = 31;

  // 1，定义存储hashcode的变量
  let hashcode = 0;

  // 2，使用霍纳法则（秦九韶算法），计算hashcode的值
  for (const item of string) {
    hashcode = PRIME * hashcode + item.charCodeAt();
  }

  // 3，对hashcode取余，并返回
  return hashcode % limit;
}

class HashMap {
  constructor() {
    this.count = 0; // 当前存放的元素个数
    this.storage = []; // 哈希表存储数据的变量
    this.limit = 0; // 哈希表长度（初始设置为质数7）
    // 装填因子(已有个数/总个数)
    this.loadFactor = 0.75;
    this.minLoadFactor = 0.25;
  }

  // 判断是否是质数，只需要遍历2~num的平方根即可
  isPrime(number) {
    if (number <= 1 || number === 4) return false;
    const temp = Math.ceil(Math.sqrt(number));
    for (let i = 2; i < temp; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  // 根据传入的number获取最近的质数
  getPrime(number) {
    while (!isPrime(number)) {
      number++;
    }
    return number;
  }

  put(key, value) {
    // 1，跟据key获取要映射到storage里面的index（通过hash函数获取）
    const index = hashFn(key, this.limit);

    // 2，根据index取出对应的bucket
    let bucket = this.storage[index];

    // 3，判断是否存在bucket
    if (bucket == undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4，判断是插入数据操作还是修改数据操作
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]; // tuple的格式：[key, value]
      if (tuple[0] === key) {
        // 如果key相等，则修改数据
        tuple[1] = value;
        return; // 修改完tuple 里的数据，return 终止不再往下执行
      }
    }

    // 5，bucket修改数据
    bucket.push([key, value]);
    this.count++;

    // 判断哈希表是否要扩容，若装填因子 > 0.75，则需要扩容
    if (this.count / this.limit > this.loadFactor) {
      this.resize(this.getPrime(this.limit * 2));
    }
  }

  get(key) {
    const index = hashFn(key, this.limit);
    const bucket = this.storage[index];

    if (bucket == undefined) {
      return null;
    }

    for (const tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = hashFn(key);
    const bucket = this.storage[index];

    if (bucket == undefined) {
      return undefined;
    }

    // 遍历bucket，找到对应位置的 tuple，将其删除
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1); // 删除对应位置的数组项
        this.count--;

        // 根据装填因子的大小，判断是否要进行哈希表压缩
        if (this.limit > 7 && this.count / this.limit < this.minLoadFactor) {
          this.resize(this.getPrime(Math.floor(this.limit / 2)));
        }

        return tuple;
      }
    }
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  // 对哈希表进行扩容或压缩操作
  resize(newLimit) {
    // 1，保存旧的storage数组内容
    const oldStorage = this.storage;

    // 2，重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 遍历oldStorage，取出所有数据，重新put到this.storage里面
    for (const bucket of oldStorage) {
      if (bucket) {
        for (const b of bucket) {
          this.put(b[0], b[1]);
        }
      }
    }
  }
}

console.log(hashFn("123")); // 5
console.log(hashFn("abc")); // 6

/**
 * 二叉搜索树
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new Node(key);

    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.key < root.key) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(key) {}

  min() {
    if (!this.root) return null;
    let node = this.root;

    while (node.left != null) {
      node = node.left;
    }
    return node.key;
  }

  max() {
    if (!this.root) return null;
    let node = this.root;

    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  }

  search(key) {
    this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) return false;

    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  search1(key) {
    let node = this.root;

    while (node != null) {
      if (key < node.left) {
        node = node.left;
      } else if (key > node.right) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // 删除节点
  remove(key) {
    let currentNode = this.root;
    let parentNode = null;
    let isLeftChild = true;

    // 循环查找到要删除的节点 currentNode，以及它的 parentNode、isLeftChild
    while (currentNode.key !== key) {
      parentNode = currentNode;

      // 小于，往左查找
      if (key < currentNode.key) {
        isLeftChild = true;
        currentNode = currentNode.left;
      } else {
        // 否则往右查找
        isLeftChild = false;
        currentNode = currentNode.right;
      }

      // 找到最后都没找到相等的节点，返回 false
      if (currentNode === null) {
        return false;
      }
    }

    // 1、删除的是叶子节点的情况
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }

      // 2、删除的是只有一个子节点的节点
    } else if (currentNode.right === null) {
      // currentNode 只存在左节点
      //-- 2.1、currentNode 只存在<左节点>的情况
      //---- 2.1.1、currentNode 等于 root
      //---- 2.1.2、parentNode.left 等于 currentNode
      //---- 2.1.3、parentNode.right 等于 currentNode

      if (currentNode === this.root) {
        this.root = currentNode.left;
      } else if (isLeftChild) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }
    } else if (currentNode.left === null) {
      // currentNode 只存在右节点
      //-- 2.2、currentNode 只存在<右节点>的情况
      //---- 2.1.1 currentNode 等于 root
      //---- 2.1.1 parentNode.left 等于 currentNode
      //---- 2.1.1 parentNode.right 等于 currentNode

      if (currentNode === this.root) {
        this.root = currentNode.right;
      } else if (isLeftChild) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }

      // 3、删除的是有两个子节点的节点
    } else {
      // 1、找到后续节点
      let successor = this.getSuccessor(currentNode);

      // 2、判断是否为根节点
      if (currentNode === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }

      // 3、将后续的左节点改为被删除的左节点
      successor.left = currentNode.left;
    }
  }

  // 获取后续节点，即从要删除的节点的右边开始查找最小的值
  getSuccessor(delNode) {
    // 定义变量，保存要找到的后续
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    // 循环查找 current 的右子树节点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 判断寻找到的后续节点是否直接就是要删除节点的 right
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }

  preOrderTraverse() {
    const result = [];
    this.preOrderTraversalNode(this.root, result);
    return result;
  }

  preOrderTraversalNode(node, result) {
    if (node == null) return result;
    result.push(node.key);
    this.preOrderTraversalNode(node.left, result);
    this.preOrderTraversalNode(node.right, result);
  }

  inOrderTraverse() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  inOrderTraversalNode(node, result) {
    if (node == null) return result;
    this.inOrderTraversalNode(node.left, result);
    result.push(node.key);
    this.inOrderTraversalNode(node.right, result);
  }

  postOrderTraverse() {
    const result = [];
    this.postOrderTraversalNode(this.root, result);
    return result;
  }

  postOrderTraversalNode(node, result) {
    if (node == null) return result;
    this.postOrderTraversalNode(node.left, result);
    this.postOrderTraversalNode(node.right, result);
    result.push(node.key);
  }
}
