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
    let temp = arr[v1]
    arr[v1] = arr[v2]
    arr[v2] = temp
  }

  // 找到相对合适的元素放到数组索引为0的位置作为基点pivot
  function init(left, right) {
    let center = Math.floor((left + right) / 2)

    // 比较索引为left、center、right三个值的大小，从小到大排列
    if (arr[left] > arr[right]) exchange(left, right)
    if (arr[center] > arr[right]) exchange(center, right)
    if (arr[left] > arr[center]) exchange(left, center)

    // 判断数组长度是否大于3，若小于3，则数组已经排序好了，不需要做任何处理
    if (right - left > 2) exchange(left, center)
  }

  function quick(left, right) {
    init(left, right)
    // 若数组长度小于等于2，则不需要做任何操作了，因为init函数已经排序好了
    if (right - left <= 2) return

    // 创建指针i和j，分别指向left和right
    let i = left
    let j = right
    // 将该数组区域的第一个元素作为基点pivot
    let pivot = arr[i]

    // 不断让指针i和j寻找合适的值填坑，直到两个指针重合
    while (i < j) {
      // 指针j不断向左找小于pivot的值，但指针j不能找到指针i的左边
      while (arr[j] > pivot && j > i) {
        j--
      }
      // 将找到的小于pivot的值填到指针i所指向的坑中
      arr[i] = arr[j]

      // 指针i不断向右找大于pivot的值，但指针i不能找到指针j的右边
      while (arr[i] < pivot && i < j) {
        i++
      }
      // 将找到的大于pivot的值填到指针j所指向的坑中
      arr[j] = arr[i]
    }

    // 将pivot填到指针i和指针j共同指向的坑中
    arr[i] = pivot

    // 对此时pivot的左边所有元素进行快排
    quick(left, i - 1)
    // 对此时pivot的右边所有元素进行快排
    quick(i + 1, right)
  }

  quick(0, arr.length - 1)

  return arr
}

// https://juejin.cn/post/6932482325159067656#heading-4
const quickSort3 = function (arr) {
  const quick = function (arr) {
    if (arr.length <= 1) return arr
    const len = arr.length
    const index = Math.floor(len >> 1)
    const pivot = arr.splice(index, 1)[0]
    const left = []
    const right = []
    for (let i = 0; i < len; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i])
      } else if (arr[i] <= pivot) {
        left.push(arr[i])
      }
    }
    return quick(left).concat([pivot], quick(right))
  }
  const result = quick(arr)
  return result
}

// 快速排序，初始：left = 0, right = arr.length - 1
// https://zhuanlan.zhihu.com/p/89909216
const quickSort1 = function (arr, left, right) {
  // 数组的划分，以一个基准进行元素交换
  const partition = function (arr, left, right) {
    // 设定最右边元素为基准值
    let baseVal = arr[right]
    // 设置左边区域索引，左边区域长度为 leftIndex + 1。
    let leftIndex = left - 1
    // 循环要进行划分的数组，从 left 到 right
    for (var i = left; i < right; i++) {
      if (arr[i] <= baseVal) {
        // 长度增加
        leftIndex++
        // 交换：将 arr[j] 放到左边区域最后一个
        ;[arr[leftIndex], arr[i]] = [arr[i], arr[leftIndex]]
      }
    }
    // 交换：将 arr[r] 放在左右区域之间
    ;[arr[leftIndex + 1], arr[right]] = [arr[right], arr[leftIndex + 1]]
    // 返回左边区域长度
    return leftIndex + 1
  }
  // 设置结束判断，防止无限递归下去
  if (left < right) {
    // 获取数组左右区域的分隔点
    let partitionIndex = partition(arr, left, right)
    // 递归划分数组左右区域
    quickSort1(arr, left, partitionIndex - 1)
    quickSort1(arr, partitionIndex + 1, right)
  }
  return arr
}
let arr = [2, 9, 7, 1, 3, 5, 6, 4]
console.log(quickSort1(arr, 0, arr.length - 1)) // (8) [1, 2, 3, 4, 5, 6, 7, 9]

Array.prototype.quickSort = function () {
  // 递归
  const rec = (arr) => {
    // 递归终止条件
    if (arr.length === 1) {
      return arr
    }
    // 新建两个空数组，分别用来存放基准值左右的序列
    const left = []
    const right = []
    // 基准值，可设置为数组的头部元素
    const mid = arr[0]
    // 从第二个元素开始，遍历数组
    for (let i = 1; i < arr.length; i++) {
      // 如果当前值比基准小，就push到左数组，反之，就push到右数组
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // 将基准值放在中间，然后递归执行左右数组，就可以了
    return [...rec(left), mid, ...rec(right)]
  }
  const res = rec(this)
  res.forEach((n, i) => (this[i] = n))
}

const array = [5, 4, 3, 2, 1]
// console.log(quickSort(array)); // [1, 2, 3, 4, 5]
array.quickSort()
console.log(array)

/**
 * JS实现快速排序(从小到大排列)
 * https://www.cnblogs.com/mackxu/archive/2013/02/27/quicksort.html
 *
 * 1 - 在数据集中，选择一个元素作为“基准”(pivot)
 * 2 - 所有小于“基准”的元素，都移到“基准”的左边，所有大于“基准”的元素，都移到右边。
 * 3 - 对“基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */
if (typeof Array.prototype.quickSort !== 'function') {
  Array.prototype.quickSort = function () {
    quickSortHelper(this, 0, this.length - 1)
    //确定哨兵, 递归分离
    function quickSortHelper(arr, start, end) {
      if (start < end) {
        //快排结束条件start>=end
        //获取哨兵的位置
        var part = partation(arr, start, end)

        //根据递归实现排序
        arguments.callee(arr, start, part - 1)
        arguments.callee(arr, part + 1, end)
      }
    }
    function partation(arr, start, end) {
      var pivot = arr[end] //设置哨兵
      var i = start //交换的次数+1 哨兵要在数组插入的位置
      for (var j = start; j < end; j++) {
        if (arr[j] < pivot) {
          swap(arr, i, j)
          i++
        }
      }
      swap(arr, i, end)
      return i
    }
    //交换数组元素的值
    function swap(arr, i, j) {
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}

//------------------- test ------
var arr = [5, 2, 3, 1, 4]
arr.quickSort()
console.log(arr)

/*************************************** 快速排序和三鹿快排 *****************************************/
// https://juejin.cn/post/6844903777221214215
// https://juejin.cn/post/6844903576037244935
// https://juejin.cn/post/6844903621105041416

console.time('test0')
function qSort(arr) {
  if (arr.length == 0) {
    return []
  }
  var left = []
  var right = []
  var pivot = arr[0]
  for (var i = 1; i < arr.length; i++) {
    // 注意这里的起始值，因为有一个作为flag了
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qSort(left), pivot, ...qSort(right)]
}
console.log(
  qSort([9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0])
)
console.timeEnd('test0')

console.time('test1')
function qSort3(arr) {
  //三路快排
  if (arr.length == 0) {
    return []
  }
  var left = []
  var center = []
  var right = []
  var pivot = arr[0] //偷懒，直接取第一个,实际取值情况 参考[快速排序算法的优化思路总结]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] == pivot) {
      center.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...qSort3(left), ...center, ...qSort3(right)]
}
console.log(
  qSort3([9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0])
)
console.timeEnd('test1')
