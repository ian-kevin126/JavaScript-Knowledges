/**
 * 一、会改变数组自身的方法（9个）
 */

/**
 * 1、Array.prototype.copyWithin()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 2、Array.prototype.fill()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 3、Array.prototype.pop()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 4、Array.prototype.push()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

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
 *    如果数组只有一个项目，那么将返回该项目而不使用分隔符。
 */
const arr_2 = ["Fire", "water", "element"];
console.log(arr_2.join()); // Fire,water,element
/**
 * 3、Array.prototype.slice()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 4、Array.prototype.includes()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 5、Array.prototype.indexOf()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 6、Array.prototype.lastIndexOf()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 7、Array.prototype.toString()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

/**
 * 8、Array.prototype.toLocaleString()：在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
 */

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
