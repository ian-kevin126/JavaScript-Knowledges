import { shortArray, longArray } from "../../data";
/**
 * 归并排序
 *
 * - (https://blog.csdn.net/L_PPP/article/details/108498581)
 * - (https://blog.csdn.net/l_ppp/article/details/108855298?utm_source=app&app_version=4.13.0&utm_source=app)
 *
 */
Array.prototype.mergeSort = function () {
  // 递归
  const rec = (arr) => {
    // 递归终点
    if (arr.length === 1) return arr;
    // 先获取中间下标
    const mid = Math.floor(arr.length / 2);
    // 获取左右两个数组
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    // 调用递归处理左右数组，将左右数组排序称为有序的数组
    const orderLeft = rec(left);
    const orderRight = rec(right);

    // 合并
    const res = [];
    while (orderLeft.length || right.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        // 如果有一个数组已经空了，就把剩余的元素全部进栈
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        // 如果有一个数组已经空了，就把剩余的元素全部进栈
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};

function mergeSort1(arr) {
  // 将所有元素不断地两两组合，直到所有元素都被组合成一个组
  while (arr.length > 1) {
    // 获取一下遍历前的数组长度，方便下面判断需要组合几次
    let length = arr.length;

    // 创建空的新数组，用于存放所有组合后的元素
    let next_arr = [];

    // 取两个元素进行组合，一共取 length / 2 次
    for (let i = 0; i < Math.floor(length / 2); i++) {
      // 取出第一个元素
      let left = [].concat(arr.shift());
      // 取出第二个元素
      let right = [].concat(arr.shift());
      // 创建另一个新的空数组，用于存放组合后的所有元素
      let new_arr = [];

      // 取两个数组中头部最小的值放到新数组中，直到一个数组为空
      while (left.length > 0 && right.length > 0) {
        let min = left[0] > right[0] ? right.shift() : left.shift();
        new_arr.push(min);
      }
      // 将合并好的数组添加到新的数组中
      next_arr.push(new_arr.concat(left.length == 0 ? right : left));
    }
    // 判断是否有一个未成组的数组
    if (arr.length == 1) next_arr.push(arr[0]);

    // 将所有组合后的元素构成的新数组作为下一次遍历的对象
    arr = next_arr;
  }

  // 返回完整有序数组
  return arr[0];
}

const array = [5, 4, 3, 2, 1];
// array.mergeSort();
// console.log(array);

console.time("归并排序");
mergeSort1(longArray);
// longArray.mergeSort();
console.timeEnd("归并排序"); // 44.969970703125 ms
