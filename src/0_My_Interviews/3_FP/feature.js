/**
 * 
一等公民
我一直觉得“一等公民”这个词翻译过来一看是很容易产生歧义的，英文是 first-class objects（first-class citizens）。首先我们来解释一下 first-class 是什么。首先，类型规定了值的可取范围，比如 int， string， class等等，这就是类型。根据类型的值的可赋值情况，可以把类型分成三类：

- first-class 类型的值可以传给子程序作为参数，可以从子程序里返回，可以赋给变量。大多数程序设计语言里，整型、字符类型等简单类型都是一级的。
- second-class 该等级类型的值可以传给子程序作为参数，但是不能从子程序里返回，也不能赋给变量。
- third-class 该等级类型的值连作为参数传递也不行。 参考 那我们就理解了什么是 first-class 了。在函数式编程的思想中，函数是 first-class 的，这个概念是 Christopher Strachey 提出的，并有几个原则，是我们上面提到的。函数：
- 可以被命名为变量
- 可以作为程序的参数
- 可以作为程序的返回值
- 可以包含在数据结构里 这么看来，在 JS 中 function 是满足以上几个原则的。我们通过代码来详细解释以下这几个原则
 */

// 1，作为变量
const add = function (x, y) {
  return x + y;
};

//,2，参数
const base = [1, 2, 3];
const double = function (num) {
  return num * 2;
};
const result = base.map(double);
// double 就是 map 函数的参数

// 3，返回值
function currying(fn, ...ahead) {
  return function (...behind) {
    return fn(...ahead, ...behind);
  };
}
const add = function (x, y) {
  return x + y;
};
const add2 = currying(add, 2);
const num = 1;
const result = add2(add2(add2(add2(num))));

// currying 函数执行后的返回值就是一个函数。由于是例子，是我随性写的... 你可以先不去关注代码在干什么，后面会提到curry 的概念。 4. 数据结构

const add = function (x, y) {
  return x + y;
};
const obj = {
  add: add,
};
const ary = [add];

/**
 * 纯函数
 */
const { log } = require("../utils");

// 首先我们从操作数组的方法开始
const ary = [1, 2, 3, 4, 5];

ary.push(6);

ary.pop(6);

ary.unshift(0);

ary.shift(0);

ary.splice(3, 5);

const result = ary.concat([4, 5]);

const copy = result.slice();

const double = copy.map((item) => item * 2);

log(result, copy, double, "aa");

double.reverse();

// 回忆一下 👆 的方法，返回值是什么，还有会不会对元素组造成改变。
// -------------------- -------------------- -------------------- --------------------

// 像 push pop 这种对原数组有修改操作的，因为原数组被永久的改变了，即产生了副作用。
// 而我们更期待一个稳定的输出。换一种说法就是固定的输入对应固定的输出，
// 也就是我们中学数学学的函数映射关系。f(x) = x * 2;  f(1) = 2, f(2) = 4
// 比如这个求三倍的函数
function triple(x) {
  return x * 3;
}

const y1 = triple(2);

// 与之对应的就是 Side Effects， 产生副作用的函数

export var y2;

function tripleEffect(x) {
  y2 = x * 3;
}
tripleEffect(3);
tripleEffect(3);

// tripleEffect 也是求三倍，只不过他是比较偏过程，更有局限性的，如果需要操作其他 y 值，
// 还需要定义另一个函数。另外它也永久的改变了 y2 的值，再执行一次 tripleEffect(3)，
// y2 已经变成了之前的 9 倍。然而业务中的代码显然没有这么简单，很容易出现你在另一个地方，
// 还需要用到 y2 并进行了副作用的操作，这样你之前用到的 y2 就被 “偷偷摸摸” 的改变了...
// 导致你之前的代码出现了 bug，而你却很难第一时间定位到错误在哪，浪费很多时间调试。

// 业务中可能出现副作用的地方：
// 发送一个 http 请求函数
// 可变数据
// 打印/log
// 获取用户输入
// DOM 查询
// -------------------- -------------------- -------------------- --------------------

// 通过一个简单的例子，介绍纯函数的好处。
// say hi，首字母大写，并在句尾加感叹号。
const personName = "tom";

function sayHi(name) {
  return `hi, ${name}`;
}

function upper(str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1, str.length)}`;
}

function loudly(str) {
  return `${str}!`;
}

console.log(loudly(upper(sayHi(personName))));

// 这里是通过三个纯函数组合实现的一个功能，当然职责单一，减少耦合等思想是很容易结合的。
// 每个函数负责自己的功能，接受参数并返回一个新的 result。纯函数的好处：
// 1.可移植性
// 比如随便一个函数都可以放到任何地方，任意项目运行。尤其是 utils 之类的。
// 2.文档化
// 从函数体就可以看出 sayHi 的作用可能是什么，并且它的参数是一个 name，返回值也会在最后return
// 3.可测试性
// 随意一个函数，只要给定输入，就会得到输出。我们的测试会更容易写。
// 测试代码在 test/pure.test.js
// 比如 triple 和 tripleEffect，triple 是纯函数，给一个输入得到一个输出，测试很容易。但是 tripleEffect
// 的变量依赖于当前的作用域，写测试的时候有局限性，几乎没有单元测试可言。非要测也有办法...
// 4.合理性
// 如果我们写的函数，执行结果可以被一段代码代替，并且不改变程序最后的结果，那这段代码就是引用透明的。
// 以上我们的 sayHi 可以完全替换成某个字符串... 因为函数式是数学推导的过程，中间的任一等式都可被
// 一对一的等价替换。

export { triple, tripleEffect, sayHi, upper, loudly };
