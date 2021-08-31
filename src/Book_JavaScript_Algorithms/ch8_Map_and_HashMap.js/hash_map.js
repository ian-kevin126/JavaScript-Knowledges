/**
 * 散列表：HashTable也叫HashMap类，它是Dictionary类的一种散列表实现方式。散列算法的作用是尽可能快地从数据结构中找到一个值。在
 * 之前的一些数据结构中，如果要去找到一个指定的值需要遍历数据结构。如果使用散列函数，就知道值的具体位置，因此能快速检索到该值。
 * 散列函数的作用是给定一个键值，然后返回值在表中的地址。
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

class HashTable {
  constructor() {
    this.table = {};
  }

  // 散列函数
  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = defaultToString(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
}

const _hashTable = new HashTable();
_hashTable.put("Gandalf", "gandalf@email.com");
_hashTable.put("John", "johnsnow@email.com");
_hashTable.put("Tyrion", "tyrion@email.com");
console.log(_hashTable.hashCode("Gandalf") + " - Gandalf"); // 19 - Gandalf
console.log(_hashTable.hashCode("John") + " - John"); // 29 - John
console.log(_hashTable.hashCode("Tyrion") + " - Tyrion"); // 16 - Tyrion
console.log(_hashTable.get("Gandalf")); // gandalf@email.com
console.log(_hashTable.get("Loiane")); // undefined
_hashTable.remove("Gandalf");
console.log(_hashTable.get("Gandalf"));
