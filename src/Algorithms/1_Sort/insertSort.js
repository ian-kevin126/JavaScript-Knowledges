import { shortArray } from '../data'
/**
 * 插入排序
 * https://juejin.cn/post/6932482325159067656
 */
const insertSort = (arr) => {
  const array = [...arr]
  const len = array.length
  let cur, prevIdx
  if (len < 2) {
    return array
  }
  // 从第二个元素开始遍历数组
  for (let i = 1; i < len; i++) {
    // 将当前元素作为插入元素
    cur = array[i]
    // 插入元素的前一个元素的下标，遍历的起始位置
    prevIdx = i - 1
    // 遍历插入元素之前的元素
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      // 如果遍历的元素比插入元素大，就将遍历到的这个元素往后移动一位，给插入元素让出位置
      array[prevIdx + 1] = array[prevIdx]
      // 指针减一，继续往前遍历
      prevIdx--
    }
    // 等到插入元素找到自己的位置之后，将其放回到数组中
    array[prevIdx + 1] = cur
  }
  return array
}

const insertSortCopy = (arr) => {
  const array = [...arr]
  const len = array.length
  let cur, prevIdx
  if (len < 2) {
    return array
  }
  // 从第二个元素开始遍历数组
  for (let i = 1; i < len; i++) {
    // 将当前元素当作是插入元素
    cur = array[i]
    // 插入元素的前一个元素的下标
    prevIdx = i - 1
    // 遍历插入元素之前的元素
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      // 如果当前元素比遍历的元素小，就将遍历元素向后移动一位，给插入元素腾出位置
      array[prevIdx + 1] = array[prevIdx]
      // 指针减一，继续往前遍历和比较，直到找到比插入元素小的元素终止
      prevIdx--
    }
    // 遍历插入元素之前的元素之后，就会找到插入元素该插入的位置，由于prevIdx在循环中减一，这里就需要加一
    array[prevIdx + 1] = cur
  }
  return array
}

const insertSortCopy1 = (arr) => {
  const array = [...arr]
  const len = array.length
  let cur, prevIdx
  if (len < 2) {
    return array
  }
  for (let i = 1; i < len; i++) {
    cur = array[i]
    prevIdx = i - 1
    while (prevIdx >= 0 && array[prevIdx] > cur) {
      array[prevIdx + 1] = array[prevIdx]
      prevIdx--
    }
    array[prevIdx + 1] = cur
  }
  return array
}

console.time('插入排序')
console.log(insertSortCopy1(shortArray))
console.timeEnd('插入排序') // 插入排序: 0.964111328125 ms
