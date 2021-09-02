import { defaultEquals } from "../util";
import { Node } from "./models/linked-list-models";

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn; // 判断链表中两元素是否相等
    this.count = 0; // 存储链表中元素的数量
    this.head = undefined; // 链表的头
  }

  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      // 情况1：如果链表为空
      this.head = node;
    } else {
      // 情况2：链表不为空
      current = this.head;
      while (current.next != null) {
        // 如果链表的next指针不为空（undefined或null），表示还未遍历到最后一个节点
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // 返回链表中特定位置的元素，如果不存在就返回undefined
  getElementAt(index) {
    // 边界检查
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // 向链表的特定位置插入一个新元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        // 在第一个位置添加
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        // const current = previous.next;
        // node.next = current;

        // 可简化为
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  // 从链表的特定位置移除一个元素
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        // 移除第一个节点
        this.head = current.next;
      } else {
        // for (let i = 0; i < index; i++) {
        //   previous = current;
        //   current = current.next;
        // }

        // 用getElement方法重构remove关键代码
        const previous = this.getElementAt(index - 1);
        current = previous.next;

        // 将previous与current的下一个节点直接链接起来,跳过current,从而实现移除
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // 从链表中移除一个元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 返回元素在链表中的索引
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
