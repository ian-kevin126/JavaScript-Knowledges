// 创建数组
let daysOfWeek = new Array()
daysOfWeek = new Array(7)
daysOfWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
)
let daysOfWeek_1 = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// 在数组末尾添加一个元素
daysOfWeek[daysOfWeek.length] = 'Tail'
console.log(daysOfWeek) // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Tail']

// 求斐波那契数列的前20个数
const getFibonacciNumbers = () => {
  const fibNums = []
  fibNums[1] = 1
  fibNums[2] = 1
  for (let i = 3; i < 20; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums
}

console.log(getFibonacciNumbers()) // […, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

// 在数组开头插入元素，模拟Array.prototype.unshift方法
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
  return this
}

// 从数组开头删除一个元素
Array.prototype.shiftFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  return this
}
console.log([1, 2, 3, 4, 5, 6, 7].shiftFirstPosition()) // [2, 3, 4, 5, 6, 7, undefined]

// 在任意位置增加、删除数组元素
const array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array_1.splice(3, 0, 3), array_1) // [] [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9]
console.log(array_1.splice(3, 1), array_1) // [3] [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 二维和多维数组及其迭代
let averageTemp = []
averageTemp[0] = [72, 75, 79, 79, 81, 81]
averageTemp[1] = [81, 79, 75, 75, 73, 73]
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j])
    }
  }
}
printMatrix(averageTemp)

// 数组常用方法
const array_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1，Array.prototype.concat()：连接2个或更多数组，并返回合并后的一个新的数组
console.log(array_2.concat([11, 12], [13, 14])) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]

// 2，Array.prototype.every()：对数组中的每个元素执行给定的函数，如果该函数对每个元素都返回true，则返回true
console.log(array_2.every((i) => i >= 0)) // true

// 3，Array.prototype.filter()：对数组中每个元素执行给定的函数，返回该函数会返回true的元素组成的一个新数组
console.log(array_2.filter((i) => i > 5)) // [6, 7, 8, 9]

// 4，Array.prototype.forEach()：对数组中每个元素执行给定函数，这个方法没有返回值，不改变原数组
console.log(
  array_2.forEach((i) => i + 1),
  array_2
) // undefined [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5，Array.prototype.map()：对数组中每个元素执行给定函数，然后返回一个新数组，不改变原数组
console.log(
  array_2.map((i) => i + 1),
  array_2
) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 6，Array.prototype.join()：将所有的数组元素连接成一个字符串
console.log(array_2.join(',')) // 0,1,2,3,4,5,6,7,8,9

// 7，Array.prototype.indexOf()：返回第一个与给定参数相等的数组元素的索引，没有返回-1
console.log(array_2.indexOf(2)) // 2

// 8，Array.prototype.lastIndexOf()：倒序匹配，第一个与给定参数相等的数组元素的索引，没有返回-1
console.log(array_2.lastIndexOf(2)) // 2

// 9，Array.prototype.reverse()：颠倒数组，输出倒序后的数组
console.log(array_2.reverse()) //  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// 10，Array.prototype.sort()：数组排序

// 11，Array.prototype.toString()：将数组作为字符串返回;
console.log(array_2.toString()) // 9,8,7,6,5,4,3,2,1,0

// 12，Array.prototype.valueOf()：和toString方法类似，将数组作为字符串返回
console.log(array_2, array_2.valueOf() instanceof Array) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] true

/**
 * ES6数组新方法
 */
// 13，Array.prototype.copyWithin()：复制数组中一系列元素到同一数组指定的起始位置。
// 14，Array.prototype.includes()：如果数组中存在某个元素则返回true，否则返回false
// 15，Array.prototype.find()：根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
console.log(
  array_1,
  array_1.find((x) => x === 3)
) // 3
// 16，Array.prototype.findIndex()：根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素的索引，没有找到则返回-1
console.log(array_1.findIndex((x) => x === 4)) // 4
// 17，Array.prototype.of()：根据传入的参数创建一个新数组
console.log(Array.of(1, 2, 3, 4)) // [1, 2, 3, 4]
// 18，Array.prototype.from()：根据已有数组创建一个新数组
console.log(Array.from({ 0: 0, 1: 1, 2: 2, length: 3 })) // [0, 1, 2]
// 19，Array.prototype.keys()：返回包含数组所有索引的@@iterator
console.log('keys', array_1.keys()) // keys Array Iterator
// 20，Array.prototype.values()：返回包含数组所有值的@@iterator
console.log('values', array_1.values()) // values Array Iterator
// 21，Array.prototype.entries()：返回包含数组所有键值对的@@iterator
console.log('entries', array_1.entries()) // entries Array Iterator
// 22，Array.prototype.fill()：用静态值填充数组，改变原数组
console.log(array_1.fill(0), array_1) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(array_1.fill(1, 3, 5)) //  将1填充到4，5两个位置（不包括3）[0, 0, 0, 1, 1, 0, 0, 0, 0, 0]

console.log(
  [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9].sort((a, b) => a - b)
) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(['john', 'ana', 'John', 'Ana'].sort((a, b) => a.localeCompare(b))) // ['ana', 'Ana', 'john', 'John']
