/**
 * 堆排序
 *
 * 
 * https://juejin.cn/post/6932482325159067656#heading-4
 */

const heapSort = function (arr) {
  buildHeap(arr, arr.length - 1)
  let heapSize = arr.length - 1 // 初始化堆的有效序列长度
  for (let i = arr.length - 1; i > 1; i--) {
    swap(arr, 1, i) // 交换堆顶元素与最后一个有效子元素
    heapSize-- // 有效序列长度减 1
    heapify(arr, heapSize, 1) // 堆化有效序列
  }
  return arr
}

// 构建大顶堆
const buildHeap = function (items, heapSize) {
  // 从后往前并不是从序列的最后一个元素开始，而是从最后一个非叶子节点开始，这是因为，叶子节点没有子节点，不需要自上而下式堆化。
  // 最后一个子节点的父节点为 n/2 ，所以从 n/2 位置节点开始堆化
  for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
    heapify(items, heapSize, i)
  }
}
// 堆化
const heapify = function (arr, heapSize, i) {
  while (true) {
    let maxIndex = i
    if (2 * i <= heapSize && arr[i] < arr[i * 2]) {
      maxIndex = i * 2
    }
    if (2 * i + 1 <= heapSize && arr[maxIndex] < arr[i * 2 + 1]) {
      maxIndex = i * 2 + 1
    }
    if (maxIndex === i) break
    swap(arr, i, maxIndex)
    i = maxIndex
  }
}

// 交换工具函数
const swap = function (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
