/**
 *
 快速排序
 快速排序（Quicksort）是对冒泡排序的一种改进。
 基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，
 其中一部分的所有数据都比另外一部分的所有数据都要小，
 然后再按此方法对这两部分数据分别进行快速排序，
 整个排序过程可以递归进行，以此达到整个数据变成有序序列

 *
 *
 */

let arr = [-9, 78, 0, 23, -567, 70];

quickSort(arr, 0, arr.length - 1);
console.log(arr);

//测试给80个数据，测试
//创建一个测试数组
// let arr2 = [];
// for (let i = 0; i < 80; i++) {
//     arr2[i] = Math.floor(Math.random() * 80);
// }

// performance.mark('mark')
// quickSort(arr2, 0, arr2.length - 1);
// performance.mark('mark');
// let marks = performance.getEntriesByName('mark')
// console.log('花费的时间(毫秒)：', marks[1].startTime = marks[0].startTime)
// console.log('排序后的数组：', arr2);

function quickSort(arr, left, right) {
  let l = left,
    r = right;
  //pivot 中轴值
  let pivot = arr[Math.floor((right + left) / 2)];
  let temp; //临时值
  //while循环的目的是让比privot值小的放左边，比pivot值大放右边
  while (l < r) {
    //在pivot的左边一直找，找到大于pivot的值,才退出
    while (arr[l] < pivot) {
      l += 1;
    }
    //在pivot的右边一直找，找到小于等于pivot的值，才退出
    while (arr[r] > pivot) {
      r -= 1;
    }
    // l >= r 说明pivot的左右两的值，已经按照左边全部是小于等于pivot值，右边全部是大于等于pivot
    if (l >= r) {
      break;
    }
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    //如果交换完后，发现arr[l] == pivot值相等，r--,前移
    //为什么要r--，因为这是为了防止arr[l] == pivot和arr[r] == pivot
    //情况下，出现l和r位置不动，造成死循环的情况，而为什么要r--，而不是l++
    //因为在l<=r的情况下，r--，仍然可以满足r到right之间的值大于等于pivot，因为
    //r--至多退到l这个位置，而arr[l] == pivot，所以情况满足，但是如果l++,
    //因为l可能会前进到r这个位置，而arr[r]的值可能是大于pivot,这样就会造成
    //left到l之间的值有一个大于pivot，这样就不满足了快速排序算法的规定，从而使得算法结果可能出现错误
    //快速排序算法的规定是left到l之间的值必须小于等于pivot，
    //r到right之间的值必须大于等于pivot

    if (arr[l] == pivot) {
      r -= 1;
    }
    //如果交换完后，发现这个arr[r] == pivot相等,l++，后移
    if (arr[r] == pivot) {
      l += 1;
    }
  }
  //如果l == r,必须l++, r--，否则会出现栈溢出
  //该情况主要针对于递归到最下一层，也就是只有一个值进行快速排序时，就是l=r=left=right的情况下
  //l++,r--会造成left < r和right > l条件不满足，从而停止继续递归，不然就是死循环
  if (l == r) {
    l++;
    r--;
  }
  //向左递归
  if (left < r) {
    quickSort(arr, left, r);
  }
  //向右递归
  if (right > l) {
    quickSort(arr, l, right);
  }
}
