/**
 * 
 *  HOF
 *  High Order Functions，即高阶函数，至少满足其下两个条件之一：
 *
 *  - 以一个函数作为参数
 *  - 以一个函数作为返回结果
 *  - 编程的维度看高阶函数
 *  - 这都是在满足函数是 "first-class" 的情况下，出现的技巧。函数可以作为程序的参数，也可以作为返回值。
*/

function HOF(...){
  return function(...){
    //...
  }
}

// 函数作为参数
// 比如操作数组的 map，reduce 函数，都是此类。

const x = [1, 2, 3];
const y = x.map(function(item) {
  return item + 1;
})
reduce

// 函数作为返回值
const add = function(x) {
  return function(y) {
    return x + y;
  }
}
console.log(add(1)(2));

// 偏函数应用
// 通过一个典型的栗子来介绍。比如用 Object.prototype.toString 来判断数据类型。

const isType = function (type) {
  return function(obj) {
    if(typeof type !== 'string') {
      return new Error('type need string');
    }
    const str = type[0].toUpperCase() + type.slice(1);
    return Object.prototype.toString.call(obj) === `[object ${str}]`;
  }
}

const isNumber = isType('number');
console.log(isNumber(1));
// isType 返回一个新的函数。不过这种情况也叫偏函数，即把函数的某些参数值固定住，返回一个新的函数，调用这个新函数会更简单。

// 节流函数
// 一个在 js 中广泛应用的函数。

const throttle = wait => fn => {
var timer;
return (...args) => {
  if (!timer) {
    timer = setTimeout(() => timer = null, wait);
    return fn(...args);
  }
}
}
const debounce = wait => fn => {
  var timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait)
  }
}

/**
 * 数学的维度看高阶函数
 * 在数学中，也叫算子或者泛函。什么是算子呢。
 *
 * 首先，记一个 f: A -> B，小 f 是 A 到 B 的映射，则可以称 f 就是算子。引入 x，对 x 作用算子 f，就可以获得新的函数 f(x)。如果 x 是一个函数，这就类似于算子接收一个 x，
 * 返回了一个新的函数。而泛函，是一个向量空间到实数的映射，也就是它接收的是函数，输入是函数，返回的，输出的是实数。这两个概念的思路跟高级函数是有点类似的，通过 HOF，
 * 可以作向量空间 A 到向量空间 B 的映射，也就是映射一个函数到另一个函数。g(x) = functor(f(x))
 */

 const { logger } = require('../utils');

 // 做个 Reverse && UpperCase 的 demo
 
 // 1. usual
 const str = 'hello world';
 const upperCase = str => str.toUpperCase();
 
 const reverse = str => str.split('').reverse().join('');
 
 // console.log(upperCase(reverse(str)));
 
 // 2. reduce
 
 // first simple
 const result0 = [reverse, upperCase].reduce((res, cur) => {
   return cur(res);
 }, str);
 
 // 3. 然后 reduce 的 functor 可以提取出来，形参叫 state， action 更直观
 const reducer = (state, action) => action(state);
 const result1 = [reverse, upperCase].reduce(reducer, str);
 
 // 4. 更进一步我们把参数也放到 funcs 数组的第一项，让 reduce 自动传入
 
 const result2 = [str, reverse, upperCase].reduce(reducer);
 
 // 5. 不太优雅，柯理化改造
 
 const reverseUpper = args => [args, reverse, upperCase].reduce(reducer);
 const result3 = reverseUpper(str);
 
 
 // 6. 提取一个公共的方法，去处理函数组合， 以及参数的传入
 const compose = (...funcs) => args => funcs.reduce(reducer, args);
 const result4 = compose(reverse, upperCase)(str);
 
 [result0, result1, result2, result3, result4].map(logger);