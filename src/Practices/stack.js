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

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
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
console.log(linkedList.toString()); // A-B-C-
