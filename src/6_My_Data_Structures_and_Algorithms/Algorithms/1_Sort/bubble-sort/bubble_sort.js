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
 * 算法演示网站：https://visualgo.net/en
 */

const { shortArray, longArray } = require("../../data");

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

/****************************************************** */
/**
 * 原始人版冒泡排序
 *
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //相邻元素两两对比
        var temp = arr[j + 1]; //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];

/**
 * 进化版冒泡排序
 *
 * “进化版”冒泡排序算法相对于“原始人”冒泡排序有个亮点，就是每一层的循环都记录上一次排序的位置，这两种排序算法都是先排最后一位，最后一位是最大的，
 * 然后以此类推。细细推敲第二种方法显然比第一种方法少走了一些冤枉路，也就是说每一层排完序之后，就记录排到最大的哪一位在什么位置，因为每一层最大的
 * 数就是它所在数组的倒数的位数，因此下一次就没必要再循环一遍，相对于第一种就少进行了很多计算。
 *
 * @param {*} arr
 * @returns
 */
function bubbleSort2(arr) {
  console.time("改进后冒泡排序耗时");
  var i = arr.length - 1; //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,无记录交换
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    i = pos; //为下一趟排序作准备
  }
  console.timeEnd("改进后冒泡排序耗时");
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort2(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];

/**
 * 升级版冒泡排序
 *
 * 这种排序方式也算是锦上添花，因为前两次的排序都是按最大或者最小方向进行排序，而第三种方法会选择从两头出发一起计算，双管齐下！
 *
 * @param {*} arr
 * @returns
 */
function bubbleSort3(arr3) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  console.time("2.改进后冒泡排序耗时");
  while (low < high) {
    for (j = low; j < high; ++j) {
      //正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    --high; //修改high值, 前移一位
    for (j = high; j > low; --j) {
      //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    ++low; //修改low值,后移一位
  }
  console.timeEnd("2.改进后冒泡排序耗时");
  return arr3;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort3(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];

/**
 * 自创版冒泡排序
 *
 * 既然每次记录位置可以减少计算，两头算双管齐下也能减少计算，那么思考，如果每次记录位置而且还两头算是不是会更加省事呢？（根据1.2，1.3自创）
 * 但是冒泡排序也有弊端，就是两种极端的情况，一种是数据本来就是正序，那做的就是无用功，另外一种就是反序，不想理你。。。具体怎么弊端想想也就知道了
 *
 * @param {*} arr3
 * @returns
 */
function bubbleSort3(arr3) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  console.time("3.改进后冒泡排序耗时");
  while (low < high) {
    var pos1 = 0,
      pos2 = 0;
    for (let i = low; i < high; ++i) {
      //正向冒泡,找到最大者
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        pos1 = i;
      }
    }

    high = pos1; // 记录上次位置

    for (let j = high; j > low; --j) {
      //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
        pos2 = j;
      }
    }
    low = pos2; //修改low值
  }
  console.timeEnd("3.改进后冒泡排序耗时");
  return arr3;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort3(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
