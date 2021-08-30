/**
 * 有序链表：是指保持元素有序的链表结构，除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性
 */

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function compare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  insert(element, index) {
    // 注意这里的边界
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
        } else {
          node.next = current;
          this.head = node;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.current--;
      return current.element;
    }
    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.head = null;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let current = this.head.next;
    let objString = `${this.head.element}`;
    for (let i = 1; i < this.size() && current; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const linked_list = new LinkedList();
linked_list.push(0);
linked_list.push(1);
linked_list.push(2);
linked_list.push(3);
linked_list.push(4);
linked_list.push(5);
linked_list.push(6);
linked_list.push(7);
console.log("linked_list", linked_list.toString()); // linked_list 0, 1, 2, 3, 4, 5, 6, 7
linked_list.insert(8, 8);
console.log("linked_list", linked_list.toString()); // linked_list 0, 1, 2, 3, 4, 5, 6, 7, 8
linked_list.removeAt(8);
console.log("linked_list", linked_list.toString()); // linked_list 0, 1, 2, 3, 4, 5, 6, 7
linked_list.remove(7);
console.log("linked_list", linked_list.toString()); // linked_list 0, 1, 2, 3, 4, 5, 6

class SortedLinkedList extends LinkedList {
  constructor() {
    super();
  }

  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      // 如果是空链表
      return super.insert(element, index === 0 ? index : 0);
    }
    // 找到元素在链表中正确的插入位置
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  /**
   * 由于这个类跟一般的链表相比有特殊的功能（有序），我们需要一个用来比较元素的函数。
   */
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = compare(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

const sorted_linked_list = new SortedLinkedList();
sorted_linked_list.insert(0);
sorted_linked_list.insert(1);
sorted_linked_list.insert(6);
sorted_linked_list.insert(9);
sorted_linked_list.insert(3);
sorted_linked_list.insert(5);
console.log(sorted_linked_list.toString()); // 0, 1, 3, 5, 6, 9
sorted_linked_list.insert(1);
console.log(sorted_linked_list.toString()); // 0, 1, 1, 3, 5, 6, 9
