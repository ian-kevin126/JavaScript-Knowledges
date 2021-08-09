/**
 * 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，
 * 在已排序序列中从后向前扫描，找到相应位置并插入。
 *
 * 算法描述：一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
 * 1，从第一个元素开始，该元素可以认为已经被排序；
 * 2，取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 3，如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 4，重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5，将新元素插入到该位置后；
 * 6，重复步骤2~5。
 *
 * https://www.cnblogs.com/onepixel/p/7674659.html
 * https://juejin.cn/post/6932482325159067656
 * 算法演示网站：https://visualgo.net/en
 *
 */

const { shortArray } = require("../data");

/**
 * 插入排序
 * @param {*} arr
 * @returns
 */
const insertSort = (arr) => {
  const array = [...arr];
  const len = array.length;
  let cur, prevIdx;
  if (len < 2) {
    return array;
  }
  // 从第二个元素开始遍历数组
  for (let i = 1; i < len; i++) {
    // 将当前元素作为插入元素
    cur = array[i];
    // 插入元素的前一个元素的下标，遍历的起始位置
    prevIdx = i - 1;
    // 遍历插入元素之前的元素
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      // 如果遍历的元素比插入元素大，就将遍历到的这个元素往后移动一位，给插入元素让出位置
      array[prevIdx + 1] = array[prevIdx];
      // 指针减一，继续往前遍历
      prevIdx--;
    }
    // 等到插入元素找到自己的位置之后，将其放回到数组中
    array[prevIdx + 1] = cur;
  }
  return array;
};

const insertSortCopy = (arr) => {
  const array = [...arr];
  const len = array.length;
  let cur, prevIdx;
  if (len < 2) {
    return array;
  }
  // 从第二个元素开始遍历数组
  for (let i = 1; i < len; i++) {
    // 将当前元素当作是插入元素
    cur = array[i];
    // 插入元素的前一个元素的下标
    prevIdx = i - 1;
    // 遍历插入元素之前的元素
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      // 如果当前元素比遍历的元素小，就将遍历元素向后移动一位，给插入元素腾出位置
      array[prevIdx + 1] = array[prevIdx];
      // 指针减一，继续往前遍历和比较，直到找到比插入元素小的元素终止
      prevIdx--;
    }
    // 遍历插入元素之前的元素之后，就会找到插入元素该插入的位置，由于prevIdx在循环中减一，这里就需要加一
    array[prevIdx + 1] = cur;
  }
  return array;
};

const insertSortCopy1 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let cur, prevIdx;
  if (len < 2) {
    return array;
  }
  for (let i = 1; i < len; i++) {
    cur = array[i];
    prevIdx = i - 1;
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      array[prevIdx + 1] = array[prevIdx];
      prevIdx--;
    }
    array[prevIdx + 1] = cur;
  }
  return array;
};

const insertSort1 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let prevIndex, current;
  if (len < 2) {
    return array;
  }
  for (let i = 1; i < len; i++) {
    current = array[i];
    prevIndex = i - 1;
    while (prevIndex >= 0 && array[prevIndex] > current) {
      array[prevIndex + 1] = array[prevIndex];
      prevIndex--;
    }
    array[prevIndex + 1] = current;
  }
  return array;
};

console.time("插入排序");
console.log(insertSort1(shortArray));
console.timeEnd("插入排序"); // 插入排序: 0.964111328125 ms
