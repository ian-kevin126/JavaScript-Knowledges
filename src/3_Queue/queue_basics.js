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

    clear() {
      _items.set(this, []);
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

/**
 * 优先队列：顾名思义，就是说插入到队列中的元素可以根据优先级设置先后顺序。优先级越高越靠前，假设优先级用数字来表示，如果数字越小表示的优先级越高
 * 形成的队列就称之为最小优先队列，反之则称之为最大优先队列。
 */
function PriorityQueue() {
  let items = [];

  //向队列添加一个或多个元素，参数obj的数据格式：{element，priority}
  this.enqueue = function (obj) {
    if (obj instanceof Array) {
      for (let i = 0, ci; (ci = obj[i]); i++) {
        this.enqueue(ci);
      }
    } else {
      let added = false;
      for (let i = 0, ci; (ci = items[i]); i++) {
        // 最小优先级，即将priority值小的元素插入到队列的前面
        if (obj.priority < ci.priority) {
          items.splice(i, 0, obj);
          added = true;
          break;
        }
      }

      // 如果元素没有插入到队列中，则默认加到队列的尾部
      if (!added) items.push(obj);
    }
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    items = [];
  };

  this.print = function () {
    items.forEach((item) => console.log(`${item.element} - ${item.priority}`));
  };
}

// 可以看到，唯一的区别只有enqueue方法，我们规定所有添加到有限队列的元素都必须满足{element，priority}这种JSON格式，以保证队列中的每一个元素都有一个priority来表示优先级。
// 如果要添加的元素的优先级和队列中已有元素的优先级相同，仍然遵循队列的先进先出原则。
// 如果队列中所有元素的优先级比要添加的元素的优先级都高，则将元素添加到队列的末尾。
const _priorityQueue = new PriorityQueue();
console.log(_priorityQueue.isEmpty()); // true
_priorityQueue.enqueue({ element: "John", priority: 2 });
_priorityQueue.enqueue([
  { element: "Jack", priority: 1 },
  { element: "Camila", priority: 1 },
]);
_priorityQueue.print(); // Jack - 1   Jack - 1  John - 2

/**
 * 循环队列：我们用一个击鼓传花来说明循环队列在实际中的应用
 */
function hotPotato(nameList, num) {
  const queue = new Queue();

  for (let i = 0; (ci = nameList[i]); i++) {
    queue.enqueue(ci);
  }

  let eliminated = "";

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated} has been eliminated`);
  }

  return queue.dequeue();
}
let nameLists = ["John", "Jack", "Camila", "Ingrid", "Carl"];
let winner = hotPotato(nameLists, 7);
console.log(`The winner is: ${winner}`); // The winner is: John
