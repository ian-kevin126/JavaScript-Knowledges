class SingleNode {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  push(element) {
    const node = new SingleNode(element);
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
    if (index >= 0 && index <= this.count) {
      const node = new SingleNode(element);
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

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const _index = this.indexOf(element);
    return this.removeAt(_index);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.head = null;
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

// const single_linked_list = new SingleLinkedList();
// single_linked_list.push(0);
// single_linked_list.push(1);
// single_linked_list.push(2);
// single_linked_list.push(3);
// single_linked_list.push(4);
// single_linked_list.push(5);
// single_linked_list.push(6);
// single_linked_list.insert(7, 7);
// single_linked_list.insert(9, 2);
// console.log(single_linked_list.toString()); // 0, 1, 9, 2, 3, 4, 5, 6, 7
// single_linked_list.removeAt(2);
// single_linked_list.remove(7);
// single_linked_list.remove(0);
// single_linked_list.removeAt(0);
// console.log(single_linked_list.toString()); // 2, 3, 4, 5, 6

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
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if ((index = this.count)) {
        current = this.getElementAt(index - 1);
        current.next = node;
        node.prev = current;
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
        if (this.count === 0) {
          return undefined;
        } else if (this.count === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = current.next;
          current.next.prev = undefined;
        }
      } else if (index === this.count - 1) {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        this.tail = previous;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
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
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const _index = this.indexOf(element);
    return this.removeAt(_index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
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

const doubly_linked_list = new DoublyLinkedList();
doubly_linked_list.push(0);
doubly_linked_list.push(1);
doubly_linked_list.push(2);
doubly_linked_list.push(3);
doubly_linked_list.push(4);
doubly_linked_list.push(5);
doubly_linked_list.push(6);
doubly_linked_list.insert(7, 7);
doubly_linked_list.insert(9, 0);
console.log("doubly_linked_list", doubly_linked_list.toString()); // doubly_linked_list 9, 0, 1, 2, 3, 4, 5, 6, 7
doubly_linked_list.removeAt(0);
doubly_linked_list.remove(7);
doubly_linked_list.remove(5);
console.log("doubly_linked_list", doubly_linked_list.toString()); // 0, 1, 2, 3, 4, 6
