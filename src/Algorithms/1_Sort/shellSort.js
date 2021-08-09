/**
 * 希尔排序：1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，
 * 它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
 *
 * 算法描述
 * 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法q描述：
 * 1，选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 * 2，按增量序列个数k，对序列进行k 趟排序；
 * 3，每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，
 *    整个序列作为一个表来处理，表长度即为整个序列的长度。
 *
 * https://www.cnblogs.com/chengxiao/p/6104371.html
 * https://www.cnblogs.com/onepixel/p/7674659.html
 * 算法演示网站：https://visualgo.net/en
 */

const { shortArray } = require("../data");

const shellSort = (arr) => {
  const array = [...arr];
  let len = array.length;
  if (len < 2) {
    return array;
  }
  // 通过Math.floor生成增量序列，假如是10个元素的数组，那序列就是 5，2，1
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 由5开始遍历数组序列
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = array[i];
      // 如果第5个元素小于第0个元素
      while (j - gap >= 0 && current < array[j - gap]) {
        // 就将第0个元素换到第5个元素的位置
        array[j] = array[j - gap];
        // 保存左序列中与右序列对应的位置下标
        j = j - gap;
      }
      // 将比较出来的小值放到左序列中的位置
      array[j] = current;
    }
  }
  return array;
};

// shellSort：https://github.com/sisterAn/JavaScript-Algorithms/issues/75
function shellSort3(arr) {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    // 内层循环与插入排序的写法基本一致，只是每次移动的步长变为 gap
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      let temp = arr[j];
      for (; j > 0; j -= gap) {
        if (!(j - gap >= 0) || !(temp < arr[j - gap])) {
          break;
        }
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

const shellSort_1 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let index, current;
  if (len < 2) {
    return array;
  }
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      index = i;
      current = array[i];
      while (index >= 0 && array[index - gap] > current) {
        array[index] = array[index - gap];
        index = index - gap;
      }
      array[index] = current;
    }
  }
  return array;
};

const shellSort_2 = (arr) => {
  const array = [...arr];
  const len = array.length;
  let j, current;
  if (len < 2) {
    return array;
  }
  // 增量序列
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 简单的插入排序
    for (let i = gap; i < array.length; i++) {
      j = i;
      current = array[j];
      while (j >= 0 && array[j] < array[j - gap]) {
        array[j] = array[j - gap];
        j = j - gap;
      }
      array[j] = current;
    }
  }
  return array;
};

// example
let arr = [2, 5, 10, 7, 10, 32, 90, 9, 11, 1, 0, 10];
console.log(shellSort(arr));

console.time("希尔排序");
console.log(shellSort_2(shortArray)); // [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd("希尔排序"); // 希尔排序: 9.881ms
