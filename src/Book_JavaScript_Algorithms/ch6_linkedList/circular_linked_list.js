/**
 * 循环链表：可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表与链表之间唯一的区别在于：
 * 最后一个元素指向下一个元素的指针不是引用undefined，而是指向第一个元素（head）
 */

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      // 注意这里的实现，不能用下面这种方式，会陷入死循环
      // let current = this.head;
      // while (current.next != null) {
      //   current = current.next;
      // }

      let current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    node.next = this.head;
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.size()) {
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
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size()); // 拿到最后一个节点
          this.head = node;
          current.next = this.head; // 将尾节点指回头节点
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

  // removeAt(index) {
  //   if (index >= 0 && index < this.count) {
  //     let current = this.head;
  //     if (index === 0) {
  //       if (this.head == null) {
  //         return undefined;
  //       } else if (this.count === 1) {
  //         this.head = undefined;
  //       } else {
  //         const removed = this.head;
  //         current = this.getElementAt(this.size());
  //         this.head = this.head.next;
  //         current.next = this.head;
  //         current = removed;
  //       }
  //     } else {
  //       const previous = this.getElementAt(index - 1);
  //       current = previous.next;
  //       previous.next = current.next;
  //     }
  //     this.count--;
  //     return current.element;
  //   }
  //   return undefined;
  // }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  size() {
    return this.count;
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

const linked_list = new CircularLinkedList();
linked_list.push(0);
linked_list.push(1);
console.log(linked_list.toString()); // 0,1
linked_list.removeAt(0);
console.log(linked_list.toString()); // 1
