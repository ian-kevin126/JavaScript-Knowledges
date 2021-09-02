/**
 * 队列：遵循先进先出（FIFO）原则的一组有序的项，队列在尾部添加新元素，在队首移除元素。现实生活中的例子就是排队。
 *
 */
class Queueu {
  constructor() {
    this.count = 0; // 队列的大小
    this.lowestCount = 0; // 由于我们将要从队列前端移除元素，同样需要一个变量来帮助我们追踪第一个元素
    this.items = {}; // 存储元素
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queueu();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue.toString()); // 12345

/**
 * Queue类和Stack类非常类似，主要区别在于dequeue和peek方法，这是由于先进先出和后进先出原则的不同造成的。
 */

/**
 * 双端队列：允许我们同事从前端和后端添加和移除元素的特殊队列，一种将栈的原则和队列的原则混合在一起的数据结构。
 */
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      // 情况1，如果队列是空，就跟从后端入队是一样的逻辑，可以复用
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // 情况2，一个元素已经被从双端对列的前端移除，也就是说lowestCount属性会大于等于1
      /**
       * 考虑如下情况：
       * items = {
       *  1: 8,
       *  2: 9
       * }
       * count = 3
       * lowestCount = 1
       *
       * 如果我们想将元素7添加到这个双端队列的前端，就符合这种情况
       */
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        // 将队列元素整体向后移动一位，腾出队首位置
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const res = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return res;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const deque = new Deque();
console.log(deque.isEmpty()); // true
deque.addBack("John");
deque.addBack("Jack");
console.log(deque.toString()); // John,Jack,
deque.addFront("kevin");
deque.addFront("Tom");
console.log(deque.toString()); // Tom,kevin,John,Jack,
deque.removeFront();
deque.removeBack();
console.log(deque.toString()); // kevin,John,

/**
 * 循环队列：击鼓传花游戏
 */
function hotPotato(elementList, num) {
  const queue = new Queueu();
  const elimitatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    elimitatedList,
    winner: queue.dequeue(),
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
console.log(result.winner); // John

/**
 * 回文检查器
 *
 * 回文：正反都能读通的单词、词组、数或者一系列字符的序列，例如madam 或 racecar
 *
 * 有不同的算法检查一个词组或者字符串是否是回文，最简单的方式就是将字符串反向排列并检查它和原字符串是否相同。如果两者相同，那么它就是一个回文。我们也可以用栈来完成，但是利用数据结构来解决这个问题的最简单的方法就是使用双端队列；
 */
function palindromeChecker(aString) {
  if (aString == null || (aString && aString === 0)) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");

  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log("a", palindromeChecker("a")); // true
console.log("aa", palindromeChecker("aa")); // true
console.log("kayak", palindromeChecker("kayak")); // true
console.log("level", palindromeChecker("level")); // true
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
); // true
console.log("Step on no pets", palindromeChecker("Step on no pets")); // true
