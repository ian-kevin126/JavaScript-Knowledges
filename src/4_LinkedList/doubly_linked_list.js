/**
 * 双向链表：单向链表中的每一个元素只有一个next指针，用来指向下一个节点，这使得我们只能从链表的头部开始遍历整个链表，任何一个节点只能找到它的下一个节点，而不能找到它的上一个节点。
 * 这时候就出现了双向链表，双向链表中的每一个元素拥有两个指针，一个用来指向下一个节点，一个用来指向上一个节点。这样，我们就不仅可以从头部遍历整个链表，还能从尾部遍历整个链表。
 */
import LinkedList from "./singly_linked_list";

// 双向链表的节点类（继承单向链表的节点类）
// class DoublyNode extends Node {
//   constructor(element) {
//     super(element);
//     this.prev = null;
//   }
// }

// const Node = function (element = null, next = null, prev = null) {
//   this.element = element;
//   this.next = next;
//   this.prev = prev;
// };

class Node {
  constructor(element = null, next = null, prev = null) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  // 重写append方法，往双向链表的尾部增加一个新的元素
  append(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  // 执行位置插入元素
  insert(element, position) {
    if (position < 0 || position > this.length) return false;

    const node = new Node(element);

    // 在开头插入元素
    if (position === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      // 在最后一个位置插入元素
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      // 在中间的位置插入元素
      let current = this.head,
        previous,
        index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.prev = previous;
      node.next = current;
      current.prev = node;
    }
    this.length++;
    return true;
  }

  // 删除指定位置的节点
  removeAt(position) {
    // 1、position 越界判断
    if (position < 0 || position > this.length - 1) return null;
    // 2、根据不同情况删除元素
    let current = this.head;
    if (position === 0) {
      // 删除第一个节点的情况
      if (this.length === 1) {
        // 链表内只有一个节点的情况
        this.head = null;
        this.tail = null;
      } else {
        // 链表内有多个节点的情况
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      // 删除最后一个节点的情况
      current = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      // 删除 0 ~ this.length - 1 里面节点的情况
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.perv = previous;
    }
    this.length--;
    return current.element;
  }

  // 修改指定位置的节点
  update(position, element) {
    // 1、删除 position 位置的节点
    const result = this.removeAt(position);
    // 2、在 position 位置插入元素
    this.insert(position, element);
    return result;
  }

  // 链表数据从前往后以字符串形式返回
  forwardToString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.element + "--";
      current = current.next;
    }
    return result;
  }

  // 链表数据从后往前以字符串的形式返回
  backwardString() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.element + "--";
      current = current.prev;
    }
    return result;
  }
}
