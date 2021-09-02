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

  // 一个比loselose更好的散列函数，这并不是最好的散列函数，但是这是最受社区推崇的散列函数之一。
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key); // {1}
    let hash = 5381; // {2}
    for (let i = 0; i < tableKey.length; i++) {
      // {3}
      hash = hash * 33 + tableKey.charCodeAt(i); // {4}
    }
    return hash % 1013; // {5}
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

  isEmpty() {
    return JSON.stringify(this.table) === "{}";
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => 
   ${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }
}

// 散列表测试
// const _hashTable = new HashTable();
// _hashTable.put("Gandalf", "gandalf@email.com");
// _hashTable.put("John", "johnsnow@email.com");
// _hashTable.put("Tyrion", "tyrion@email.com");
// console.log(_hashTable.hashCode("Gandalf") + " - Gandalf"); // 19 - Gandalf
// console.log(_hashTable.hashCode("John") + " - John"); // 29 - John
// console.log(_hashTable.hashCode("Tyrion") + " - Tyrion"); // 16 - Tyrion
// console.log(_hashTable.get("Gandalf")); // gandalf@email.com
// console.log(_hashTable.get("Loiane")); // undefined
// _hashTable.remove("Gandalf");
// console.log(_hashTable.get("Gandalf"));

/**
 * 有时候，一些键会有相同的散列值，不同的值在散列表中对应相同位置的时候，我们称其为冲突。我们看下面的代码，
 * 注意，Nathan 和 Sargeras 有相同的散列值（10）。Jack 和 Athelstan 有相同的散列值（7），Jonathan、Jamie、Sue 和 Aethelwulf 也有相同的散列值（5）。
 */
// const hash = new HashTable();
// hash.put("Ygritte", "ygritte@email.com"); // 4 - Ygritte
// hash.put("Jonathan", "jonathan@email.com"); // 5 - Jonathan
// hash.put("Jamie", "jamie@email.com"); // 5 - Jamie
// hash.put("Jack", "jack@email.com"); // 7 - Jack
// hash.put("Jasmine", "jasmine@email.com"); // 8 - Jasmine
// hash.put("Jake", "jake@email.com"); // 9 - Jake
// hash.put("Nathan", "nathan@email.com"); // 10 - Nathan
// hash.put("Athelstan", "athelstan@email.com"); // 7 - Athelstan
// hash.put("Sue", "sue@email.com"); // 5 - Sue
// hash.put("Aethelwulf", "aethelwulf@email.com"); // 5 - Aethelwulf
// hash.put("Sargeras", "sargeras@email.com"); // 10 - Sargeras
// console.log(hash.toString());

// {4 => [#Ygritte: ygritte@email.com]}
// {5 => [#Aethelwulf: aethelwulf@email.com]}
// {7 => [#Athelstan: athelstan@email.com]}
// {8 => [#Jasmine: jasmine@email.com]}
// {9 => [#Jake: jake@email.com]},
// {10 => [#Sargeras: sargeras@email.com]}

/**
 * Jonathan、Jamie、Sue 和 Aethelwulf 有相同的散列值，也就是 5。由于 Aethelwulf是最后一个被添加的，它将是在 HashTable 实例中占据位置 5 的元素。
 * 首先 Jonathan 会占据这个位置，然后 Jamie 会覆盖它，Sue 会再次覆盖，最后 Aethelwulf 会再覆盖一次。这对于其他发生冲突的元素来说也是一样的。
 *
 * 使用一个数据结构来保存数据的目的显然不是丢失这些数据，而是通过某种方法将它们全部保存起来。因此，当这种情况发生的时候就要去解决。
 * 处理冲突有几种方法：分离链接、线性探查和双散列法。
 */

// 1、分离链接法：包括为散列表的每一个位置创建一个链表并将元素存储在里面，它是解决冲突最简单的方法，但是不足之处在于在HashTable之外还需要要额外的存储空间。

// 需要一个链表
class LinkedNode {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  push(element) {
    const node = new LinkedNode(element);
    let current = this.head;
    if (this.head == null) {
      this.head = node;
    } else {
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index && current; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new LinkedNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
        } else {
          node.next = current;
          this.head = node;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = null;
        } else {
          this.head = current.next;
        }
      } else if (index === this.count - 1) {
        const previous = this.getElementAt(index - 1);
        previous.next = null;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const _index = this.indexOf(element);
    return this.removeAt(_index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.head = null;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let current = this.head.next;
    let objString = `${this.head.element}`;

    for (let i = 1; i < this.size(); i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }

    return objString;
  }
}

const _linked_list = new LinkedList();
_linked_list.push(0);
_linked_list.push(1);
_linked_list.push(2);
_linked_list.push(3);
_linked_list.push(4);
_linked_list.push(5);
_linked_list.push(6);
_linked_list.push(7);
console.log(_linked_list.toString()); // 0, 1, 2, 3, 4, 5, 6, 7
_linked_list.insert(8, 8);
_linked_list.insert(9, 2);
console.log(_linked_list.toString()); // 0, 1, 9, 2, 3, 4, 5, 6, 7, 8
_linked_list.remove(9);
_linked_list.removeAt(0);
console.log(_linked_list.toString()); // 1, 2, 3, 4, 5, 6, 7, 8

class HashTableSeparateChaining {
  constructor() {
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    const _key = defaultToString(key);
    let hash = 0;
    for (let i = 0; i < _key.length; i++) {
      hash += _key.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}

// 2、线性探查法：之所以称作线性，是因为它处理冲突的方法是将元素直接存储到表中，而不是单独的数据结构中。当想向表中某个位置添加一个新元素的时候，
// 如果索引为position的位置已经被占据了，就尝试position + 1的位置，如果position + 1的位置也被占据了，就尝试position + 2的位置，一次类推，直到
// 找到一个空闲的位置。

/**
 * 想象一下，有一个已经包含一些元素的散列表，我们想要添加一个新的键和值。我们计算这个新键的hash，并检查散列表中对应的位置是否被占据。如果没有
 * 我们就将该值添加到正确的位置，如果占据了，我们就迭代散列表，直到找到一个空闲的位置。
 *
 * 当我们从散列表中移除一个键值对的时候，仅将本章之前的数据结构所实现位置的元素移除是不够的，如果我们只是移除了元素，就可能在查找有相同hash（位置）
 * 的其他元素时找到一个空的位置，这回导致算法出现问题。
 *
 * 线性探查技术分为两种：
 * 第一种是软删除方法，我们使用一个特殊的值（标记）来表示键值对被删除了（惰性删除或软删除），而不是真的删除它。经过一段时间，
 * 散列表被操作过后，我们会得到一个标记了若干删除为止的散列表。这会逐渐降低散列表的效率。因为搜索键值会随时间变的更慢。能快速访问并找到一个键是我们
 * 使用散列表的一个重要原因。
 * 第二种是需要检验是否有必要将一个或多个元素移动到之前的位置。当搜索一个键的时候，这种方法可以避免得到一个空的位置。如果移动元素是必要的，我们就需要
 * 散列表中挪动键值对。
 */
class HashTableLinearSearch {
  constructor() {
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    const _key = defaultToString(key);
    let hash = 0;
    for (let i = 0; i < _key.length; i++) {
      hash += _key.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    // 要获得一个键对应的值，先要确定这个键存在
    if (this.table[position] != null) {
      // 如果这个键存在，需要检查我们要找的值是否就是原始位置上的值
      if (this.table[position].key === key) {
        // 如果是，直接返回
        return this.table[position].value;
      }
      // 如果不是，就从下一个位置继续寻找
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }

      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }

  /**
   * 由于我们不知道在散列表的不同位置上是否存在具有相同hash的元素，需要验证删除操作是否有副作用。
   * @param {*} key 被删除的key
   * @param {*} removedPosition 该key被删除的位置
   */
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}
