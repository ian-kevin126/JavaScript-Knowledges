/**
 * 栈
 */

// 最简单的栈结构
class Stack1 {
  constructor() {
    this.items = []
  }

  push(val) {
    // 入栈一个或多个元素
    this.items.concat(val)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }
}

/**
 * 创建一个基于JavaScript对象的Stack类
 *
 * 创建一个Stack类最简单的方式是使用一个数组来存储其元素，在处理大量数据的时候（这在现实生活中的项目很常见），我们同样需要评估如何操作数据是最高效的。在使用数组时，大部分方法的时间复杂度是O(n)，我们需要迭代整个数组直到找到要找的元素，在最坏的情况下需要迭代数组的所有位置，其中n代表数组的长度，如果有更多元素的话，所需的时间会更长。另外，数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间。
 *
 * 如果我们能直接获取元素，占用较少的内存空间，并且仍然能保证所有元素按照我们的需要排列，那不是更好吗？对于使用JavaScript语言实现栈数据结构的场景，我们也可以使用一个JavaScript对象来存储所有的栈元素，保证它们的顺序并且遵循LIFO原则。
 */
class Stack2 {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count]
  }

  clear() {
    this.items = {}
    this.count = 0

    // 或者
    // while (!this.isEmpty()) {
    //   this.items.pop()
    // }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = ''
    for (let i = 0; i < this.count; i++) {
      objString += this.items[i]
    }
    return objString
  }
}

const _stack = new Stack2()
_stack.push(0)
_stack.push(1)
_stack.push(2)
_stack.push(3)
_stack.push(4)
_stack.push(5)
_stack.push(6)
_stack.push(7)
_stack.push(8)
_stack.push(9)
_stack.pop()
console.log(_stack.toString()) // 0123456789

/**
 * 保护数据结构内部元素
 *
 * 在创建别的开发这也可以使用的数据结构或对象的时候，我们希望保护内部的元素，只有我们暴露出来的方法才能修改内部结构，对于Stack类来说，要确保元素只会被添加到栈顶，而不是栈底或其他任意位置（比如栈的中间），不幸的是，我们Stack类中声明的items和count属性并没有得到保护，通过下面的方式都可以获得对应的属性。根据这种行为，我们可以对这两个属性赋新的值，这种行为显然是不安全的。
 *
 * 本章使用ES2015（ES6)语法创建了Stack类，它是基于原型的，尽管基于原型的类能节省内存空间并在扩展方法优于基于函数的类，但这种方式不能声明私有属性（变量）或方法。另外，在本例中，我们希望Stack类的用户只能访问我们在类中暴露的方法。
 */
console.log(Object.getOwnPropertyNames(_stack)) // ['count', 'items']
console.log(Object.keys(_stack)) // ['count', 'items']

/**
 * 下面来看看其他使用JavaScript来实现私有属性的方法
 */
const _items = Symbol('stackItems') // 声明一个Symbol类型的变量_items

class Stack3 {
  constructor() {
    this[_items] = [] // 初始化
  }

  push(element) {
    this[_items].push(element)
  }

  // ...
  print() {
    let str = ''
    for (const item of this[_items]) {
      str += item
    }
    return str
  }
}

// 但是ES6新增的Object.getOwnPropertySymbols方法仍然能够取到类里面的所有Symbols属性。
const _stack1 = new Stack3()
_stack1.push(0)
_stack1.push(1)
_stack1.push(2)
_stack1.push(3)
_stack1.push(4)
console.log(_stack1.print()) // 01234
const _obj = Object.getOwnPropertySymbols(_stack1)
console.log(_obj) // [Symbol(stackItems)]
_stack1[_obj[0]].push(5)
console.log(_stack1.print()) // 012345

// 从以上代码可以看出，我们还是可以通过方法获取到_items的，并且_items属性是一个数组，可以任意对其进行数组所有的操作。然后，我们操作的是栈这种数据结构，不应该出现这种行为。

/**
 * 还有第三种方法：WeakMap
 *
 * 有一种数据结构可以确保是私有的，这就是WeakMap，它可以存储键值对，其中键是对象，值可以是任意类型。
 *
 * 但是鱼和熊掌不可兼得，采用这种方法，代码的可读性不强，而且在扩展该类时无法继承私有属性。
 *
 * 在TypeScript中提供了一个给类属性和方法使用的private修饰符，然而，该修饰符只在编译时有用，在代码转译完成后，属性同样是 公开的。
 *
 * 注：JavaScript中有一个新的提案是可以给类增加私有属性。
 */
const items = new WeakMap()
class Stack {
  constructor() {
    items.set(this, [])
  }

  push(element) {
    items.get(this).push(element)
  }

  pop() {
    return items.get(this).pop()
  }

  peek() {
    const s = items.get(this)
    return s[s.length - 1]
  }

  size() {
    const s = items.get(this)
    return s.length
  }

  isEmpty() {
    const s = items.get(this)
    return s.length === 0
  }

  print() {
    const s = items.get(this)
    let str = ''
    for (const item of s) {
      str += item
    }
    return str
  }
}

/**
 * 栈解决实际问题：十进制转换成二进制
 */
function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

console.log(decimalToBinary(10)) // 1010

/**
 * 通用进制转换：把十进制转换成基数为2~36的任意进制
 */
function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let str = ''

  // 如果不在2~36之内，就直接返回空字符串
  if (!(base > 2 && base < 36)) {
    return ''
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    str += digits[remStack.pop()]
  }

  return str
}

console.log(baseConverter(100, 8)) // 144
console.log(baseConverter(12313, 16)) // 123019
console.log(baseConverter(12143543534, 16)) // 2D3CFC4EE
