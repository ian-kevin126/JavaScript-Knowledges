/**
 * 一、会改变数组自身的方法（9个）
 */

/**
 * 1、Array.prototype.copyWithin(target[, start[, end]])：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 *    - target：0位基底的索引，赋值到该位置。
 *      - 如果是负数，target将从末尾开始计算。
 *      - 如果 target >= arr.length 将不会发生拷贝
 *    - start：0为基底的索引，开始复制元素的起始位置。
 *      - 如果是负数，start将会从末尾开始计算。
 *      - 如果start被忽略，将从0开始复制。
 *    - end：0为基底的索引，开始复制元素的结束位置。
 *      - copyWithin将会拷贝到这个位置，但不包括end这个位置的元素。
 *      - 如果是负数，end将会从末尾开始计算；
 *      - 如果end被忽略，将会一直复制到结尾（默认为arr.length）
 */
const copy_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(copy_array.copyWithin());        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(copy_array.copyWithin(-2));      // [0, 1, 2, 3, 4, 5, 6, 7, 0, 1]
// console.log(copy_array.copyWithin(0, 3, 4)); // [3, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(copy_array.copyWithin(-2, -3, -1)); // [0, 1, 2, 3, 4, 5, 6, 7, 7, 8]

/**
 * 2、Array.prototype.fill(value[, start[, end]])：用一个固定值填充一个数组中从起始索引到终止索引内的全部元素，不包括终止索引。
 */
const fill_array = [1, 2, 3, 4, 5];
// console.log(fill_array.fill(0, 2, 4)); // [1, 2, 0, 0, 5]
// console.log(fill_array.fill(5, 1)); // [1, 2, 0, 0, 5]
// console.log(fill_array.fill(6)); // [6, 6, 6, 6, 6]
console.log(fill_array.fill(4, NaN, NaN)); // [1, 2, 3, 4, 5]

/**
 * 3、Array.prototype.pop()：从数组中删除最后一个元素，并返回该元素的值。
 */
console.log([12, 2, 3, 44, , 55, 56, 6, 6].pop()); // 6
/**
 * 4、Array.prototype.push(element1, ..., elementN))：将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 * 注意：返回的是数组的新长度。
 */
console.log([1, 2, 3, 4, 5].push(6, 7, 8, 9)); // 9
/**
 * 5、Array.prototype.shift()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 6、Array.prototype.unshift()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 7、Array.prototype.reverse()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 8、Array.prototype.sort()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 9、Array.prototype.splice()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 二、不会改变数组的方法（9个）
 */

/**
 * 1、Array.prototype.concat(arrayX, arrayX, ..., arrayX)：用于连接两个或多个数组，返回被连接数组的一个副本。
 */
const arr_1 = [1, 2, 3, 4, 5, 6];
const newArr_1 = arr_1.concat(["a", "b", "c"], false, "ddd");
console.log(newArr_1); // [1, 2, 3, 4, 5, 6, "a", "b", "c", false, "ddd"]
console.log(arr_1); // [1, 2, 3, 4, 5, 6] 不改变原数组
/**
 * 2、Array.prototype.join([separator])：将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
 *    如果数组只有一个项目，那么将返回该项目而不使用分隔符。如果一个元素为undefined或者null，它会被转换为空字符串。
 */
const arr_2 = ["Fire", "water", "element"];
console.log(arr_2.join()); // Fire,water,element
console.log([1].join("-")); // 1
console.log([1, , , , , , , , , 5].join("-")); // 1---------5
/**
 * 3、Array.prototype.slice(begin, end)：方法返回一个新数组，这一对象是一个由begin和end（不包括end）决定的原数组的拷贝，不改变原数组。
 */
const slice_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(slice_arr.slice()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(slice_arr.slice(0)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(slice_arr.slice(12)); // []  超过数组长度返回空数组
console.log(slice_arr.slice(-1)); // [9]  负数会被转换为 数组长度+负数
console.log(slice_arr.slice(-12)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 负数的绝对值超过数组长度，被转换成0
console.log(slice_arr.slice(5, 4)); // []  end大于begin也会返回空数组
console.log(slice_arr.slice(-4, -5)); // []
console.log(slice_arr.slice(4, 5)); // [4]

// slice方法的经典用法：类数组转数组
function list() {
  return Array.prototype.slice.call(arguments);
}

console.log(list(1, 2, 3, 4)); // [1, 2, 3, 4]

/**
 * 4、Array.prototype.includes(valueToFind[, fromIndex])：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。
 *    需要注意的是：对象数组是不能使用这个方法去检测元素的。
 */
console.log([1, 2, 3, 4, 5].includes(2)); // true
console.log([1, 2, 3, 4, 5].includes(2, 4)); // false

// 如果fromIndex的值为负数，将会转换成 数组长度+fromIndex
const includes_arr = ["a", "b", "c"];
console.log(includes_arr.includes("a", -100)); // true 如果计算出来的索引小于0，则整个数组都会被搜索
console.log(includes_arr.includes("a", -2)); // false

/**
 * 5、Array.prototype.indexOf(searchElement[, fromIndex = 0])：返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1；
 */
const indexOf_arr = ["ant", "bison", "camel", "duck", "bison"];
console.log(indexOf_arr.indexOf("bison1")); // -1
console.log(indexOf_arr.indexOf("bison")); // 1
console.log(indexOf_arr.indexOf("bison", 2)); // 4
/**
 * 6、Array.prototype.lastIndexOf(searchElement[, fromIndex = 0])：返回在数组中可以找到一个给定元素的最后一个索引，如果不存在，则返回-1；
 *    fromIndex：从此位置开始逆向查找。默认为数组的长度减1，即整个数组都会被查找。
 */
const lastIndexOf_arr = ["ant", "bison", "camel", "duck", "bison"];
console.log(lastIndexOf_arr.lastIndexOf("bison1")); // -1
console.log(lastIndexOf_arr.lastIndexOf("bison")); // 4
console.log(lastIndexOf_arr.lastIndexOf("bison", 2)); // 1
/**
 * 7、Array.prototype.toString()：返回一个字符串，表示指定的数组及其元素。
 */
console.log([1, 2, 3, 4, "a", "b"].toString()); // 1,2,3,4,a,b
console.log([].toString()); // 空字符串

/**
 * 8、Array.prototype.toLocaleString([locales[,options]])：返回一个字符串表示数组中的元素。数组中的元素将使用各自的toLocaleString方法转成字符串，这些字符串将使用
 * 一个特定滚动语言环境的字符串（例如一个逗号“,”隔开。
 */
console.log([1, "a", new Date("21 Dec 1997 14:12:00 UTC")].toLocaleString()); // 1,a,1997/12/21下午10:12:00
console.log(
  ["￥7", 500, 8123, 12].toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  })
); // ￥7,￥500,￥8,123,￥12

/**
 * 9、Array.prototype.toSource()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 三、数组遍历方法（12个）
 */

/**
 * 1、Array.prototype.forEach()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 2、Array.prototype.map()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 3、Array.prototype.every()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 4、Array.prototype.filter()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 5、Array.prototype.some()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 6、Array.prototype.reduce()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 7、Array.prototype.reduceRight()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 8、Array.prototype.findIndex()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 9、Array.prototype.find()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 10、Array.prototype.keys()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 11、Array.prototype.values()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 12、Array.prototype.entries()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 四、其他方法（6个）
 */

/**
 * 1、Array.of()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 2、Array.from()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 3.Array.isArray()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 4.Array.valueOf()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 5.Array.flat()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 6.Array.flatMap()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */
