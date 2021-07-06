/**
 * 3、队列：队列也是一种受限的、遵循先进先出（FIFO）的线性数据结构。特殊之处在于，对列只允许在前端进行删除操作，在后端进行插入操作。
 *
 * 队列常见的操作：
 *    - 入队（enqueue(element)）：向队列尾部添加一个（或多个）新的项
 *    - 出队（dequeue）：移除队列的第一项，并返回被移除的元素。
 *    - 队列第一个元素（front）：最先被添加的元素
 *    - 对垒是否为空（isEmpty）：如果队列中不包含任意元素，返回true，否则false
 *    - 队列元素个数（size）：返回队列元素个数。
 *    - 队列字符串化（toString）：将队列中的内容字符串化
 */

const Queue = (function () {
  const _items = new WeakMap();
  class Queue {
    constructor() {
      _items.set(this, []);
    }

    enqueue(element) {
      const que = _items.get(this);
      que.push(element);
    }

    dequeue() {
      const que = _items.get(this);
      return que.shift();
    }

    // 查看队头元素
    front() {
      const que = _items.get(this);
      return que[0];
    }

    isEmpty() {
      return _items.get(this).length === 0;
    }

    size() {
      return _items.get(this).length;
    }

    toString() {
      return _items.get(this).toString();
    }
  }
  return Queue;
})();

const _queue = new Queue();
_queue.enqueue(1);
_queue.enqueue(2);
_queue.enqueue(3);
_queue.enqueue(4);
_queue.enqueue(5);
console.log(_queue.toString()); // 1,2,3,4,5
console.log(_queue.front()); // 1
console.log(_queue.dequeue()); // 1
console.log(_queue.toString()); // 2,3,4,5
console.log(_queue.isEmpty()); // false
console.log(_queue.size()); // 4

/**
 * 队列的典型应用，击鼓传花
 */
function passGame(nameList, number) {
  const _queue = new Queue();
  // 将 nameList 里面的每一个元素入队
  for (const name of nameList) {
    _queue.enqueue(name);
  }
  while (_queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      // number数字之前的人重新放入队列尾部（即把对头的元素删除，再加入到队尾）
      _queue.enqueue(_queue.dequeue());
    }
    // number对应这个人，直接从队列中删除，由于队列没有像数组一样的下标值，不能取到某一元素，所以采用把number之前的number-1个元素先删除后添加到队列末尾
    // 这样number个元素就排到了队列的最前面，可以直接使用dequeue方法进行删除。
    _queue.dequeue();
  }

  // 获取最后剩下的那个人
  const endName = _queue.front();
  // 返回这个人在原数组中对应的索引
  return nameList.indexOf(endName);
}

const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", names[targetIndex]); // 击鼓传花 lily
