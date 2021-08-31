/**
 * 字典：上一章我们学到了集合Set这种数据结构来存储唯一值（不重复的值），本章要的学的字典Map也是一种用来存储唯一值的数据结构。我们用键值对的形式来存储数据
 * 字典和集合很相似，但是他们也有区别，区别在于：集合是以[值，值]的形式存储元素，而字典则是[键，值]的形式来存储元素，字典也称为映射、符号表或关联数组。
 * 在计算机科学中，字典经常用来保存对象的引用地址，例如，打开Chrome | 开发者工具中的Memory标签页，执行快照功能，我们就能看到内存中的一些对象和它们对应的
 * 地址引用（用@<数字>表示）。
 */

/**
 * 在字典汇总，理想情况下是用字符串作为键名，值可以是任何类型（从数、字符串等原始类型到复杂的对象）。但是，由于JavaScript不是强类型的语言，我们不能保证
 * 键一定是字符串。我们需要把所有作为键名传入的对象转化为字符串，使得Dictionary类中搜索和获取值更简单（同样的逻辑也适用于上一章的Set类）。要实现此功能
 * ，我们需要一个将key转化为字符串的函数。
 * @param {*} item
 * @returns
 */
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor() {
    this.table = {};
  }

  // 向字典中添加元素，如果key已经存在，那么已存在的value会被新的值覆盖
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = defaultToString(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  // 通过使用键值作为参数来从字典中移除键值对应的数据值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[defaultToString(key)];
      return true;
    }
    return false;
  }

  // 如果某个键值存在于该字典中，返回true，否则返回false
  hasKey(key) {
    return this.table[defaultToString(key)] != null;
  }

  // 通过以键值作为参数查找特定的数值并返回
  get(key) {
    const valuePair = this.table[defaultToString(key)];
    return valuePair == null ? undefined : valuePair.value;

    // 这种方法也能实现get，但是会获取两次key的字符串以及访问两次table对象，第一次是在hasKey中，第二次是在if语句内，这是个小细节，上一种方式的消耗更少。
    // if(this.hasKey(key)) {
    //   return this.table[defaultToString(key)];
    // }
    // return undefined
  }

  // 清空该字典中的所有值
  clear() {
    this.table = {};
  }

  // 返回字典所包含值的数量，与数组的length属性类似
  size() {
    return Object.keys(this.table).length;
  }

  // 在size等于零的时候返回true，否则返回false
  isEmpty() {
    return this.size() === 0;
  }

  // 将字典所包含的所有键名以数组的形式返回
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  // 将字典所包含的所有数值以数组的形式返回
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  // 将字典中所有[键，值]对返回
  keyValues() {
    // 这种方法很简单，但是，需要时刻注意的是兼容性，不是所有的浏览器都支持Object.values()
    return Object.values(this.table);

    // 兼容性写法
    // const valuePairs = [];
    // for (const key in this.table) {
    //   if (this.hasKey(key)) {
    //     valuePairs.push(this.table[key]);
    //   }
    // }
    // return valuePairs;
  }

  // 迭代字典中所有的键值对，callbackFn有两个参数：key和value，该方法可以在回调函数返回false时被中止（和Array类中的every方法相似）
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()}`;
    }

    return objString;
  }
}

const _dictionary = new Dictionary();
_dictionary.set("Gandalf", "gandalf@email.com");
_dictionary.set("John", "johnsnow@email.com");
_dictionary.set("Tyrion", "tyrion@email.com");
console.log(_dictionary.hasKey("Gandalf")); // true
console.log(_dictionary.hasKey("Gandalf1")); // false
console.log(_dictionary.size()); // 3
console.log(_dictionary.keys()); // ['Gandalf', 'John', 'Tyrion']
console.log(_dictionary.values()); // ['gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com']
console.log(_dictionary.keyValues()); // [ValuePair, ValuePair, ValuePair]
console.log(_dictionary.get("John")); // johnsnow@email.com
_dictionary.remove("Tyrion");
_dictionary.forEach((k, v) => {
  console.log("forEach: ", `key: ${k}, value: ${v}`);
});
// forEach:  key: Gandalf, value: gandalf@email.com
// forEach:  key: John, value: johnsnow@email.com
