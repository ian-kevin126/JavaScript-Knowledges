import { shortArray } from '../data'
/**
 * 选择排序：选择排序和插入排序有些类似，也分已排序序列和未排序序列。但是选择排序是将最小的元素存放在数组起始位置，
 * 再从剩下的未排序的序列中寻找最小的元素，然后将其放到已排序的序列后面。以此类推，直到排序完成。
 */

const selectSort = (arr) => {
  const array = [...arr]
  const len = array.length
  let minIndex
  if (len < 2) {
    return array
  }
  // 遍历数组
  for (let i = 0; i < len; i++) {
    // 假设当前元素是最小值
    minIndex = i
    // 再遍历当前元素后面的元素，找到“最后那个”最小值，注意，要遍历完整个数组才终止，
    // 只要发现比预设的minIndex值小的都将其下标换给minIndex。
    for (let j = i + 1; j < len; j++) {
      if (array[j] <= array[minIndex]) {
        minIndex = j
      }
    }
    // 遍历完后，将找到的最小值放到最前面去
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

console.time('选择排序')
console.log(selectSort(shortArray))
console.timeEnd('选择排序') // 插入排序: 0.964111328125 ms
