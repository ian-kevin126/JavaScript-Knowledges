/**
 * ES6新增的类Map
 */
const map = new Map();
map.set("Gandalf", "gandalf@email.com");
map.set("John", "johnsnow@email.com");
map.set("Tyrion", "tyrion@email.com");
console.log(map.has("Gandalf")); // true
console.log(map.size); // 3
console.log(map.keys()); // 输出{"Gandalf", "John", "Tyrion"}
console.log(map.values()); // 输出{"gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"}
console.log(map.get("Tyrion")); // tyrion@email.com
map.delete("John");
console.log(map.values());

/**
 * ES6中的WeakMap和WeakSet：ES2015新增的Map和Set的弱化版本
 *
 * 它们的特点
 * - 1，WeakSet 或 WeakMap 类没有 entries、keys 和 values 等方法；
 * - 2，只能用对象作为键。
 *
 * 创建和使用这两个类的主要目的是为了性能，WeakMap和WeakSet是弱化的（用对象作为键），没有强引用的键。这使得JavaScript的垃圾回收器可以从中清除整个入口。
 * 另一个优点是：必须使用键才可以取出值，这些类没有entries、keys和values等迭代器方法，因此，除非你知道键，否则是没有办法取出值的，这在之前封装栈数据结
 * 构的时候，我们就用WeakMap来封装一个外部不可访问的对象。
 */

const weakMap = new WeakMap();
const obj_1 = { name: "Gandalf" };
const obj_2 = { name: "John" };
const obj_3 = { name: "Tyrion" };

weakMap.set(obj_1, "gandalf@email.com");
weakMap.set(obj_2, "johnsnow@email.com");
weakMap.set(obj_3, "tyrion@email.com");

console.log(weakMap.has(obj_1)); // true
console.log(weakMap.get(obj_2)); // johnsnow@email.com
weakMap.delete(obj_3);

const weakSet = new WeakSet();
weakSet.add(obj_1);
weakSet.add(obj_2);
weakSet.add(obj_3);
console.log(weakSet.has(obj_1)); // true
