import { shortArray, longArray } from '../data'
/**
 * 冒泡排序——基础版
 */
const bubble_sort_basical_edition = (arr) => {
  const len = arr.length
  if (len < 2) return arr
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

/**
 * 冒泡排序——进阶版
 */
const bubble_sort_advanced_edition = (arr) => {
  const len = arr.length
  let flag = false
  if (len < 2) return arr
  for (let i = 0; i < len; i++) {
    flag = false // 提前退出冒泡循环的标志
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true // 表示有数据交换
      }
    }
    if (!flag) break // 没有数据交换，提前退出
  }
  return arr
}

console.time('基础版冒泡排序时间')
console.log(bubble_sort_basical_edition(shortArray))
// [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd('基础版冒泡排序时间') // 基础版冒泡排序时间: 312.9873046875 ms

console.time('进阶版冒泡排序时间')
console.log(bubble_sort_advanced_edition(shortArray))
// [0, 1, 2, 4, 5, 5, 6, 7, 9, 21, 34, 57, 78, 89, 89, 100, 123, 221, 453, 657]
console.timeEnd('进阶版冒泡排序时间') // 进阶版冒泡排序时间: 256.81591796875 ms
