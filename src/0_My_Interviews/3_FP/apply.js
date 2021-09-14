/**
 * 1，缓存函数：利用了高阶函数和 js 中闭包的思想，通过 memoize 函数把一些计算函数（运算频率较高的）处理，比如 upperCase，
 * 得到一个新的函数 meUpperCase。新的函数调用的时候，会把参数对应结果 {key: value} 保存到一个映射表 cache 中，大多数是对象或者数组。
 * 下次再调用 meUpperCase，如果参数在 cache 中存在，就直接把结果返回，省去了再执行计算的代码。在 js 中，cache 的访问是通过闭包实现的，
 * 也就是在 memoize 执行的作用域中定义。缓存函数在需要大量重复计算的程序中，能够起到很好的性能优化效果。
 */

// 单个参数
const memoize = (f) => {
  const cache = {};
  return (str) => {
    if (!cache[str]) {
      cache[str] = f(str);
    }
    return cache[str];
  };
};

const capitalized = (str) =>
  str.slice(0, 1).toUpperCase() + str.slice(1, str.length);

const memoCap = memoize(capitalized);

// console.time('capitalized');
// console.log(memoCap('sunyongjian'));
// console.timeEnd('capitalized');

// console.time('capitalized');
// console.log(memoCap('sunyongjian'));
// console.timeEnd('capitalized');

// console.time('capitalized');
// console.log(memoCap('sunyongjian'));
// console.timeEnd('capitalized');

// console.time('capitalized');
// console.log(memoCap('sunyongjian'));
// console.timeEnd('capitalized');

// 第一次大写的处理可能需要 几毫米，有了缓存后，之后几乎是 0.025ms，节省很多的性能。

// 测试一个斐波那契数列，对比一下效率。

let fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// console.time('fibonacci');
// console.log(fibonacci(30));
// console.timeEnd('fibonacci');// 15.8ms

// // 重写 fibonacci，为了递归调用。
// fibonacci = memoize(fibonacci);

// console.time('memoizeFib');
// console.log(fibonacci(30));
// console.timeEnd('memoizeFib');// 0.145ms

// 多个参数

function memoize2(f) {
  const cache = {};
  return (...args) => {
    const key = args.join(",");
    if (!cache[key]) {
      cache[key] = f(...args);
    }
    return cache[key]; // 这里是执行函数和缓存其计算值
  };
}

const add = (a, b) => a + b;

const memoAdd = memoize2(add);

console.time("add");
console.log(memoAdd(2, 4));
console.timeEnd("add");

console.time("add");
console.log(memoAdd(2, 4));
console.timeEnd("add");

console.time("add");
console.log(memoAdd(2, 4));
console.timeEnd("add");

console.time("add");
console.log(memoAdd(2, 4));
console.timeEnd("add");

/**
 * 2，惰性函数：惰性函数跟缓存函数有些类似，都是为了避免重复执行代码
 */
