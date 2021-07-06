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
