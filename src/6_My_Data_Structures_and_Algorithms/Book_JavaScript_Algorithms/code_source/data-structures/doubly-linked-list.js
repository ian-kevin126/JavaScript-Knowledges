import { defaultEquals } from "../util";
import LinkedList from "./linked-list";
import { DoublyNode } from "./models/linked-list-models";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // 将尾节点指向新添加的节点
      this.tail.next = node;
      // 新节点的前置指针指向尾节点
      node.prev = this.tail;
      // 再将当前新添加节点变成新的尾节点
      this.tail = node;
    }
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // 从头部插入
          this.head = node;
          this.tail = node; // NEW
        } else {
          node.next = this.head;
          this.head.prev = node; // NEW
          this.head = node;
        }
      } else if (index === this.count) {
        // 从尾部插入
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        // 从中间插入
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node; // NEW
        node.prev = previous; // NEW
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
        // if there is only one item, then we update tail as well //NEW
        if (this.count === 1) {
          // {2}
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        // last item //NEW
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        // link previous with current's next - skip it to remove
        previous.next = current.next;
        current.next.prev = previous; // NEW
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  toString() {
    if (this.head == null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}

const double_linked_list = new DoublyLinkedList();
double_linked_list.push(0);
double_linked_list.push(1);
double_linked_list.push(2);
double_linked_list.push(3);
double_linked_list.push(4);
double_linked_list.push(5);
double_linked_list.push(6);
double_linked_list.push(7);
double_linked_list.push(8);

console.log(double_linked_list.toString());
