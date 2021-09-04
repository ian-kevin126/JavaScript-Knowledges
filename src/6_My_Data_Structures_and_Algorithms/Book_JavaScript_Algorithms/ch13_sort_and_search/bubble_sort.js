// https://juejin.cn/post/6860273835074617358#heading-2
// https://leetcode-cn.com/problems/sort-an-array/solution/dong-hua-mo-ni-yi-ge-kuai-su-pai-xu-wo-x-7n7g/
const arr = [
  12, 3, 5, 62, 0, 12, 2121, 34, 67, 8, 3, 2, 5, 734, 7, 5443, 22, 1, 2, 3, 4,
  5, 6, 7, 8, 9,
];

/**
 * 冒泡排序
 * 
   时间复杂度（平均）：O（n²）
   时间复杂度（最坏）：O（n²）
   时间复杂度（最好）：O（n）
   空间复杂度：O（1）
   排序方式：In-place
   稳定性：稳定
 * 
 * @param {*} array
 * @returns
 */
const bubbleSort = (array) => {
  const { length } = array;
  let flag;
  for (let i = 0; i < length; i++) {
    flag = true;
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }

  return array;
};

console.log(bubbleSort(arr)); // [0, 1, 2, 3, 3, 5, 5, 7, 8, 12, 12, 22, 34, 62, 67, 734, 2121, 5443]

/**
 * 选择排序
 * @param {*} array
 */
const selectionSort = (array) => {
  const { length } = array;
  let minIndex;
  for (let i = 0; i < length; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
};

console.log(selectionSort(arr)); // [0, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 8, 8, 9, 12, 12, 22, 34, 62, 67, 734, 2121, 5443]

/**
 * 插入排序
 * @param {*} array
 * @returns
 */
const insertionSort = (array) => {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    const tmp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = tmp;
  }

  return array;
};

console.log(insertionSort(arr)); // [0, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 8, 8, 9, 12, 12, 22, 34, 62, 67, 734, 2121, 5443]

/**
 * 归并排序“JavaScript的Array定义了一个sort函数 Array.prototype.sort() 用以排序JavaScript数组（我们不必自己实现这个算法）。
 * ECMAScript没有定义用哪个排序算法，所以浏览器厂商可以自行去实现排序算法。例如，Mozilla Firefox使用的就是归并排序作为sort
 * 方法的实现，而Chrome的V8引擎则是使用了一个快速排序的变体。
 *
 * 归并排序是一种分而治之的思想，其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的
 * 数组，直到最后只有一个排序完毕的大数组。由于是分治法，归并排序也是递归的，我们要将算法分为两个函数：第一个负责将一个大数组分
 * 为多个小数组并调用排序函数。
 *
 * @param {*} array
 * @returns
 */
const mergeSort = (array) => {
  const { length } = array;

  if (length <= 1) {
    return array;
  }

  let mid = Math.floor(length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

/**
 * 快速排序：也许快速排序是最常用的排序算法了，它的时间复杂度为O(nlogn)，且性能通常比其他时间复杂度为O(nlogn)的排序算法要好。和归并排序一样
 * 快速排序也适用分而治之的方法
 *
 * @param {*} array
 */
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

var quickSort1 = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort1(left).concat([pivot], quickSort1(right));
};

var quickSort = function (list, left, right) {
  let parIndex;
  let left = typeof left !== "number" ? 0 : left;
  let right = typeof right !== "number" ? list.length - 1 : right;

  if (left < right) {
    parIndex = getParIndex2(list, left, right);
    quickSort(list, left, parIndex - 1);
    quickSort(list, parIndex + 1, right);
  }
  return list;
};

var getParIndex = function (list, left, right) {
  let pivot = left,
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (list[i] < list[pivot]) {
      swap(list, i, index);
      index++;
    }
  }
  swap(list, pivot, index - 1);
  return index - 1;
};

var getParIndex1 = function (list, left, right) {
  let temp = list[left];
  while (left < right) {
    while (left < right && list[right] > temp) right--;
    list[left] = list[right];
    left++;
    while (left < right && list[left] <= temp) left++;
    list[right] = list[left];
    right--;
  }
  list[right] = temp;
  return right;
};

var getParIndex2 = function (list, left, right) {
  let pivot = list[left],
    temp,
    i = left;
  while (left < right) {
    while (left < right && list[right] > pivot) right--;
    while (left < right && list[left] <= pivot) left++;
    if (left < right) {
      swap(list, left, right);
    }
  }
  swap(list, i, right);
  return right;
};
