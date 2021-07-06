/**
 * 栈：相比于数组，可以在任意位置插入和删除元素，栈是一种受限的、遵循后进先出（LIFO）原则的线性数据结构，更像是一种变种的数组，没有那么多方法，也没有那么灵活，但是栈这种数据结构
 * 比数组更加的高效和可控，在js中，想要模拟栈，依据的主要形式页是数组；
 *
 * 典型的栈场景：浏览的前进后退，路由的push和pop。
 *
 * 时间复杂度：增、删 —— O（1），查 —— O（n）
 *
 * 常见的栈操作：
 *    - 入栈：push
 *    - 出栈：pop
 *    - 栈顶元素：peek
 *    - 判空：isEmpty
 *    - 栈大小：size
 *    - 转换字符串：toString
 */

/**
 * 栈的实现
 */

// class 实现栈
class ClassStack {
  constructor() {
    this.items = [];
    this.top = 0; // 栈的size
  }

  // 入栈
  push(ele) {
    this.items.push(ele);
    this.top += 1;
  }

  // 出栈
  pop() {
    this.items.pop();
    this.top -= 1;
  }

  // 获取栈中元素个数
  get size() {
    return this.top;
  }

  // 是否空栈
  get isEmpty() {
    return this.top === 0;
  }

  // 获取栈顶元素
  get peek() {
    if (this.top !== 0) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  // 将栈字符串化
  get toString() {
    return this.items.toString();
  }

  // 判断一个对象是否是栈的实例
  static isStack(el) {
    return el instanceof ClassStack;
  }
}

const stack_1 = new ClassStack();
// 类（class）通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。
console.log("是否是ClassStack的实例: ", ClassStack.isStack(stack_1)); // 是否是ClassStack的实例:  true
