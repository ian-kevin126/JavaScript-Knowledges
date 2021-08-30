/**
 * 链表：要存储多个元素，数组（或列表）可能是最常用的数据结构，但是数组有一个缺点：数组大小是固定的（在大多数语言中），
 * 从数组的起点或中间插入或移除元素的成本是很高的，因为需要移动元素。链表是存储有序的元素的集合，但不同于数组，链表中、
 * 的元素在内存中并不是连续放置的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称为指针或者链接）组成。
 *
 * 相比于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他的元素。因此，当我们需要添加或者移除很多元素
 * 时，最好的选择就是链表，而非数组。
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  // 向链表尾部添加一个节点
  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      // 在头部添加
      this.head = node;
    } else {
      // 在其他位置添加
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, index) {
    // 边界检查
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        // 如果是第一个位置添加
        let current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      let i = 0;
      while (i < index && current != null) {
        current = current.next;
        i++;
      }
      return current;
    }
    return undefined;
  }

  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        // 移除第一个节点
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return false;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (current.element === element) {
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
    this.head = null;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return "";
    }

    let current = this.head.next;
    let objString = `${this.head.element}`;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }

    return objString;
  }
}

const linked_list = new LinkedList();
linked_list.push(1);
linked_list.push(2);
linked_list.push(3);
linked_list.push(4);
linked_list.insert(111, 3);
linked_list.push(5);
linked_list.push(6);
console.log(linked_list.toString()); // 1, 2, 3, 111, 4, 5, 6
linked_list.remove(1);
linked_list.removeAt(2);
console.log(linked_list.toString()); // 2, 3, 4, 5, 6

class LinkedList1 {
  constructor() {
    this.count = 0;
    this.head = null;
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
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        let current = this.head;
        node.next = current;
        this.head = node;
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
    for (let i = 0; i < this.count && current != null; i++) {
      if (element === current.element) {
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
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
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

  getHead() {
    return this.head;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return "";
    }

    let objStr = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current != null; i++) {
      objStr = `${objStr}, ${current.element}`;
      current = current.next;
    }

    return objStr;
  }
}

const linked_list1 = new LinkedList1();
linked_list1.push(0);
linked_list1.push(1);
linked_list1.push(2);
linked_list1.push(3);
linked_list1.push(4);
linked_list1.push(5);
linked_list1.push(6);
console.log("linked_list1: ", linked_list1.toString()); // 0, 1, 2, 3, 4, 5, 6
linked_list1.insert(9, 2);
console.log("linked_list1: ", linked_list1.toString()); // 0, 1, 9, 2, 3, 4, 5, 6
console.log(linked_list1.indexOf(5)); // 6
console.log(linked_list1.getElementAt(5).element); // 4
linked_list1.remove(9);
console.log("linked_list: ", linked_list1.toString()); // 0, 1, 2, 3, 4, 5, 6
linked_list1.removeAt(0);
console.log("linked_list: ", linked_list1.toString()); // 1, 2, 3, 4, 5, 6
