/**
 * 集合：是由一组无序且唯一（即不能重复）的项组成的数据结构，该数据结构使用了与有限集合相同的数学概念。
 */
class Set {
  constructor() {
    this.items = {};
  }

  // 向集合添加一个元素
  add(element) {
    // 需要注意的是：this上才有has方法，而不是this.items
    if (!this.has(element)) {
      // 添加一个element的时候，把它同时作为键和值保存，因为这样有利于查找该元素。
      this.items[element] = element;
      return true;
    }
    return false;
  }

  // 从集合删除一个元素
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  // 判断一个元素是否在集合中
  has(element) {
    // 我们也可以在代码中直接使用 this.items.hasOwnProperty(element)，但是，如果这样的话，eslint会抛出一个错误。错误的原因是：
    // 不是所有的对象都继承了Object.prototype，甚至继承了Object.prototype的对象上的hasOwnProperty方法也有可能被覆盖，导致代码
    // 不能正常工作。要避免出现任何问题，使用Object.prototype.hasOwnProperty.call是更安全的做法。
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  // 清空集合
  clear() {
    this.items = {};
  }

  // 返回集合所包含的元素的数量
  size() {
    if (Object.keys) {
      return Object.keys(this.items).length;
    } else {
      let count = 0;
      for (const key in this.items) {
        if (Object.hasOwnProperty.call(this.items, key)) {
          count++;
        }
      }
      return count;
    }
  }

  /**
   * Object.keys()这个方法只能在现代浏览器中使用，在古老的浏览器中会报错，更通用的写法如下：
   */
  sizeLegacy() {
    let count = 0;
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        count++;
      }
    }
    return count;
  }

  // 返回一个包含集合中所有元素的数组
  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let result = [];
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        result.push(this.items[key]);
      }
    }
    return result;
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((element) => unionSet.add(element));
    otherSet.values().forEach((element) => unionSet.add(element));
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    this.values().forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const diffSet = new Set();
    this.values().forEach((element) => {
      if (!otherSet.has(element)) {
        diffSet.add(element);
      }
    });
    return diffSet;
  }

  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every((element) => {
      if (!otherSet.has(element)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const _set = new Set();
_set.add(0);
_set.add(1);
_set.add(2);
_set.add(3);
_set.add(4);
_set.add(5);

console.log(_set.items); // {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5}
console.log(_set.sizeLegacy()); // 6
console.log(_set.valuesLegacy()); // (6) [0, 1, 2, 3, 4, 5]
_set.delete(1);
console.log(_set.valuesLegacy()); // (5) [0, 2, 3, 4, 5]

const set1 = new Set();
set1.add(3);
set1.add(4);
set1.add(5);
set1.add(6);
set1.add(7);
set1.add(8);

console.log(_set.union(set1).values()); // [0, 2, 3, 4, 5, 6, 7, 8]
console.log(_set.intersection(set1).values()); // [3, 4, 5]
console.log(_set.difference(set1).values()); // [0, 2]

const set2 = new Set();
set1.add(3);
set1.add(4);
set1.add(5);

console.log(set2.isSubsetOf(set1)); // true
console.log(_set.isSubsetOf(set1)); // false
