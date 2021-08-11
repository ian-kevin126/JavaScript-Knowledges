/**
 * 选择排序：选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，
 * 存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，
 * 直到所有元素均排序完毕。
 *
 * 算法描述
 * —— n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：
 *
 * 1，初始状态：无序区为R[1..n]，有序区为空；
 * 2，第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小
 * 的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
 * 3，n-1趟结束，数组有序化了。
 *
 * https://www.cnblogs.com/onepixel/p/7674659.html
 * https://juejin.cn/post/6932482325159067656
 * 算法演示网站：https://visualgo.net/en
 */

const { shortArray } = require("../data");

const selectSort = (arr) => {
  const array = [...arr];
  const len = array.length;
  let minIndex;
  if (len < 2) {
    return array;
  }
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 假设当前元素是最小值
    minIndex = i;
    // 再遍历当前元素后面的元素，找到“最后那个”最小值，注意，要遍历完整个数组才终止，
    // 只要发现比预设的minIndex值小的都将其下标换给minIndex。
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j;
      }
    }
    // 遍历完后，将找到的最小值放到最前面去
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

const selectSortCopy = (arr) => {
  const array = [...arr];
  const len = array.length;
  let minIndex;
  if (len < 2) {
    return array;
  }
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
};

const selectSort1 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

console.time("选择排序");
console.log(selectSort1(shortArray));
console.timeEnd("选择排序"); // 插入排序: 0.964111328125 ms
