/**
 * 堆排序算法：我们可以用二叉堆数据结构来帮助我们创建一个非常著名的排序算法——堆排序。它主要有三个步骤：
 *
 * - 1，用数组创建一个最大堆作为源数据
 * - 2，在创建最大堆之后，最大值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减1
 * - 3，最后，我们将堆的根节点下移并重复步骤2直到对的大小为1
 */

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

/**
 * heapify 函数和我们创建的 shiftDown 方法是基本相同的，不同之处是我们会将堆本身、堆的大小和要使用的比较函数传入作为参数。
 * 这是因为我们不会直接使用堆数据结构，而是使用它的逻辑来实现堆排序算法。
 * @param {*} array
 * @param {*} index
 * @param {*} heapSize
 * @param {*} compareFn
 */
function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

/**
 * 最大堆函数会重新组织数组的顺序，归功于要进行的所有比较，我们只需要对后半部分数组执行heapify（下移）函数（前半部分会被自动排好序，所以不需要对
 * 已经直到排好序的部分执行函数）。
 * @param {*} array
 * @param {*} compareFn
 * @returns
 */
function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

console.log(heapSort([1, 2, 34, 45, 6, 67, 8, 2, 5, 2, 22, 4, 5])); // [1, 2, 2, 2, 4, 5, 5, 6, 8, 22, 34, 45, 67]
