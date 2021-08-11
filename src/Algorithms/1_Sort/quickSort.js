/**
 *快速排序（英语：Quicksort），又称划分交换排序（partition-exchange sort），简称快排，一种排序算法，
  最早由东尼·霍尔提出。在平均状况下，排序n个项目要O(nLogn)次比较。在最坏状况下则需要O(n^2)次比较，
  但这种状况并不常见。事实上，快速排序O(nLogn)通常明显比其他算法更快，因为它的内部循环（inner loop）
  可以在大部分的架构上很有效率地达成。

  快速排序的3个基本步骤：
  - 1，从数组中选择一个元素作为基准点
  - 2，排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
  - 3，最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。

  总体来说分两步：
  - 1、分区：从数组中任意选一个“基准”，所有比基准小的元素放在基准前面，比基准大的放在基准后面。
  - 2，递归：递归地对基准前后的子数组进行分区。

  算法演示网站：https://visualgo.net/en
 */
function quickSort(arr) {
  // 两个数据进行交换
  function exchange(v1, v2) {
    let temp = arr[v1];
    arr[v1] = arr[v2];
    arr[v2] = temp;
  }

  // 找到相对合适的元素放到数组索引为0的位置作为基点pivot
  function init(left, right) {
    let center = Math.floor((left + right) / 2);

    // 比较索引为left、center、right三个值的大小，从小到大排列
    if (arr[left] > arr[right]) exchange(left, right);
    if (arr[center] > arr[right]) exchange(center, right);
    if (arr[left] > arr[center]) exchange(left, center);

    // 判断数组长度是否大于3，若小于3，则数组已经排序好了，不需要做任何处理
    if (right - left > 2) exchange(left, center);
  }

  function quick(left, right) {
    init(left, right);
    // 若数组长度小于等于2，则不需要做任何操作了，因为init函数已经排序好了
    if (right - left <= 2) return;

    // 创建指针i和j，分别指向left和right
    let i = left;
    let j = right;
    // 将该数组区域的第一个元素作为基点pivot
    let pivot = arr[i];

    // 不断让指针i和j寻找合适的值填坑，直到两个指针重合
    while (i < j) {
      // 指针j不断向左找小于pivot的值，但指针j不能找到指针i的左边
      while (arr[j] > pivot && j > i) {
        j--;
      }
      // 将找到的小于pivot的值填到指针i所指向的坑中
      arr[i] = arr[j];

      // 指针i不断向右找大于pivot的值，但指针i不能找到指针j的右边
      while (arr[i] < pivot && i < j) {
        i++;
      }
      // 将找到的大于pivot的值填到指针j所指向的坑中
      arr[j] = arr[i];
    }

    // 将pivot填到指针i和指针j共同指向的坑中
    arr[i] = pivot;

    // 对此时pivot的左边所有元素进行快排
    quick(left, i - 1);
    // 对此时pivot的右边所有元素进行快排
    quick(i + 1, right);
  }

  quick(0, arr.length - 1);

  return arr;
}

Array.prototype.quickSort = function () {
  // 递归
  const rec = (arr) => {
    // 递归终止条件
    if (arr.length === 1) return arr;
    // 新建两个空数组，分别用来存放基准值左右的序列
    const left = [];
    const right = [];
    // 基准值，可设置为数组的头部元素
    const mid = arr[0];
    // 从第二个元素开始，遍历数组
    for (let i = 1; i < arr.length; i++) {
      // 如果当前值比基准小，就push到左数组，反之，就push到右数组
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 将基准值放在中间，然后递归执行左右数组，就可以了
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};
