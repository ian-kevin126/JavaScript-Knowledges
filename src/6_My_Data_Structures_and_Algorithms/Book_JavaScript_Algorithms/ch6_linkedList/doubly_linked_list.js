class DoublyNode {
  constructor(element, next, prev) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
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
    console.log(this.count, this.size());
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
        // 注意这个地方，在尾部插入，应该是this.count而不是this.count - 1
      } else if (index === this.count) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        node.next = current;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = this.head.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current; i++) {
      if (element === current.element) {
        return i;
      }
      current = current.next;
    }
    return -1;
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
    this.tail = null;
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

  inverseString() {
    if (this.isEmpty()) {
      return "";
    }

    let current = this.tail.prev;
    let objString = `${this.tail.element}`;
    for (let i = 1; i < this.size() && current; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.prev;
    }

    return objString;
  }
}

const doubly_linked_list1 = new DoublyLinkedList();
doubly_linked_list1.push(0);
doubly_linked_list1.push(1);
doubly_linked_list1.push(2);
doubly_linked_list1.push(3);
doubly_linked_list1.push(4);
doubly_linked_list1.push(5);
doubly_linked_list1.push(6);
console.log("从头到尾输出：", doubly_linked_list1.toString()); // 从头到尾输出： 0, 1, 2, 3, 4, 5, 6
console.log("从尾到头输出：", doubly_linked_list1.inverseString()); // 从尾到头输出： 6, 5, 4, 3, 2, 1, 0
doubly_linked_list1.insert(7, 7);
doubly_linked_list1.insert(7, 8);
doubly_linked_list1.insert(9, 7);
doubly_linked_list1.insert(1, 0);
console.log("从头到尾输出：", doubly_linked_list1.toString()); // 从头到尾输出： 0, 1, 2, 3, 4, 5, 6, 9, 7, 7
doubly_linked_list1.remove(1);
doubly_linked_list1.removeAt(0);
console.log("从头到尾输出：", doubly_linked_list1.toString()); // 从头到尾输出： 1, 2, 3, 4, 5, 6, 9, 7, 7
