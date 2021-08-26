// 创建数组
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);
let daysOfWeek_1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// 在数组末尾添加一个元素
daysOfWeek[daysOfWeek.length] = "Tail";
console.log(daysOfWeek); // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Tail']

// 求斐波那契数列的前20个数
const getFibonacciNumbers = () => {
  const fibNums = [];
  fibNums[1] = 1;
  fibNums[2] = 1;
  for (let i = 3; i < 20; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums;
};

console.log(getFibonacciNumbers()); // […, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

// 在数组开头插入元素，模拟Array.prototype.unshift方法
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  return this;
};

// 从数组开头删除一个元素
Array.prototype.shiftFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this;
};
console.log([1, 2, 3, 4, 5, 6, 7].shiftFirstPosition()); // [2, 3, 4, 5, 6, 7, undefined]

// 在任意位置增加、删除数组元素
const array_1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array_1.splice(3, 0, 3), array_1); // [] [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9]
console.log(array_1.splice(3, 1), array_1); // [3] [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 二维和多维数组及其迭代
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}
printMatrix(averageTemp);

// 数组常用方法
const array_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1，Array.prototype.concat()：连接2个或更多数组，并返回合并后的一个新的数组
console.log(array_2.concat([11, 12], [13, 14])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]

// 2，Array.prototype.every()：对数组中的每个元素执行给定的函数，如果该函数对每个元素都返回true，则返回true
console.log(array_2.every((i) => i >= 0)); // true

// 3，Array.prototype.filter()：对数组中每个元素执行给定的函数，返回该函数会返回true的元素组成的一个新数组
console.log(array_2.filter((i) => i > 5)); // [6, 7, 8, 9]

// 4，Array.prototype.forEach()：对数组中每个元素执行给定函数，这个方法没有返回值，不改变原数组
console.log(
  array_2.forEach((i) => i + 1),
  array_2
); // undefined [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5，Array.prototype.map()：对数组中每个元素执行给定函数，然后返回一个新数组，不改变原数组
console.log(
  array_2.map((i) => i + 1),
  array_2
); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 6，Array.prototype.join()：将所有的数组元素连接成一个字符串
console.log(array_2.join(",")); // 0,1,2,3,4,5,6,7,8,9
