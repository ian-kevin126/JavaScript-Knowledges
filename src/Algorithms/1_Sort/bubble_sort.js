/**
 * 冒泡排序：冒泡排序在每次冒泡操作时会比较相邻的两个元素，看是否满足大小关系要求，不满足就将它俩互换。
 * 一直迭代到不再需要交换，也就是排序完成。
 *
 * 步骤描述：
 * 1，比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * 2，对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * 3，针对所有的元素重复以上的步骤，除了最后一个；
 * 4，重复步骤1~3，直到排序完成。
 *
 * https://www.cnblogs.com/onepixel/p/7674659.html
 * https://juejin.cn/post/6932482325159067656
 */

const { shortArray, longArray } = require("../data");

/**
 * 基础版
 * @param {*} arr
 * @returns
 */
const bubble_sort_basical_edition = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

/**
 * 进阶版
 * @param {*} arr
 * @returns
 */
const bubble_sort_advanced_edition = (arr) => {
  const len = arr.length;
  let flag = false;
  if (len < 2) return arr;
  for (let i = 0; i < len; i++) {
    flag = false; // 提前退出冒泡循环的标志
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true; // 表示有数据交换
      }
    }
    if (!flag) break; // 没有数据交换，提前退出
  }
  return arr;
};

const bubble_copy = (arr) => {
  const array = [...arr];
  const len = array.length;
  let flag = false;
  for (let i = 0; i < len; i++) {
    flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = true;
      }
      if (!flag) break;
    }
  }
  return array;
};

const bubble_copy1 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let flag = false;
  for (let i = 0; i < len; i++) {
    flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return array;
};

console.time("基础版冒泡排序时间");
console.log(bubble_copy1(shortArray));
// [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd("基础版冒泡排序时间"); // 基础版冒泡排序时间: 312.9873046875 ms

console.time("进阶版冒泡排序时间");
console.log(bubble_sort_advanced_edition(shortArray));
// [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd("进阶版冒泡排序时间"); // 进阶版冒泡排序时间: 256.81591796875 ms

console.time("练习");
console.log(bubble_copy(shortArray));
// [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd("练习"); // 练习: 0.6279296875 ms
