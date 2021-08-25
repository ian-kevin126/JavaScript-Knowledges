/**
 * 单例模式： 单例模式提供了一种将代码组织为一个逻辑单元的手段，这个逻辑单元中的代码可以通过单一变量进行访问
 * 什么是单例模式，单例模式是一个用来划分命名空间并将一批属性和方法组织在一起的对象，如果它可以被实例化，那么它只能被实例化一次。
 * 但，并非所有的对象字面量都是单例，比如说模拟数组或容纳数据的话，那么它有可能是单例模式，所以这需要看开发者的编写代码的意图。
 *。
 *
 * 优点：
 *
 * - 可以用来划分命名空间，减少全局变量的数量
 * - 使用单例模式可以使代码组织的更为一致，使代码容易阅读和维护
 * - 可以被实例化，且实例化一次
 *
 * https://juejin.cn/post/6844903469397049352
 */

// 一个对象字面量（结构类似于单例模式）的基本结构如下：
const singleton = {
  attr1: 1,
  attr2: 2,
  method1: function () {
    return this.attr1;
  },
  method2: function () {
    return this.attr2;
  },
};

/**
 * 上面只是简单的字面量结构，上面的所有成员变量否是通过Singleton来访问的，但是它并不是单例模式；因为单例模式还有一个更重要的特点：
 * 就是仅可以被实例化一次，上面的只是不能被实例化的一个类，因此不是单例模式；但是，对象字面量是用来创建单例模式的方法之一。
 *
 * 我们明白的是单例模式如果有实例化的话，那么值实例化一次，要实现一个单例模式，我们无非就是使用一个变量来标识该类是否被实例化，
 * 如果尚未被实例化的话，那么我们可以实例化一次，否则的话，直接返回已经被实例化的对象。
 */
// 单例模式
const Singleton = function (name) {
  this.name = name;
  this.instance = null;
};

Singleton.prototype.getName = function () {
  return this.name;
};

// 获取实例化对象
function getInstance(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

// 写法二（利用闭包）
const getInstance2 = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

// 测试单例模式
const instance_1 = getInstance2("aa"); // Singleton {name: 'aa', instance: null}
console.log(global); // 这时候global全局对象中就会生成一个instance对象（Singleton实例化的一个对象）;
// 再次新建一个实例，就会直接获取已经存在的实例
const instance_2 = getInstance2("bb"); // Singleton {name: 'aa', instance: null}

// 因为单例模式只能实例化一次，所以instance_1和instance_2相等。
console.log(instance_1 === instance_2); // true

/**
 * 理解使用代理实现单例模式的好处
 *
 * 比如我们在页面上需要创建一个 div 元素，那么我们肯定需要有一个创建 div 的函数，而现在我只需要这个函数只负责创建 div 元素
 * 其他的它不管，也就是想实现单一职责原则，就好比淘宝的 kissy 一样，一开始的时候他们定义 kissy 只做一件事，并且把这件事做好
 * 具体的单例模式中的实例化类的事情交给代理函数去处理，这样做的好处是具体的业务逻辑分开了，代理只管代理的业务逻辑，在这里代理
 * 的作用是实例化对象，并且只实例化一次，创建 div 代码只管创建 div，其他的不管。
 */
const CreateDiv = function (html) {
  this.html = html;
  this.init();
};

CreateDiv.prototype.init = function () {
  const div = document.createElement("div");
  div.innerHTML = this.html;
  document.body.appendChild(div);
};

// 代理实现单例模式
const ProxyMode = (function () {
  let instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv("测试html");
    }
    return instance;
  };
})();

const aaa = ProxyMode("aaa");
const bbb = ProxyMode("bbb");

console.log(aaa === bbb); // true

/**
 * 理解单例模式来实现弹窗的基本原理
 *
 * 我们现在来实现一个弹窗的demo，我们先不讨论使用单例模式来实现，我们先用常规的方法：比如我们有一个弹窗，默认情况下肯定是隐藏的，
 * 当我们点击的时候，它需要显示出来。
 */
// 实现弹窗
const CreateWindow = function () {
  const div = document.createElement("div");
  div.innerHTML = "我是弹窗内容";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
};

document.getElementById("Id").onclick = function () {
  // 点击之后先创建一个div元素
  let win = CreateWindow();
  win.style.display = "block";
};

/**
 * 上面的代码有个明显的缺点——我们每点击一次id为Id的元素，就会创建一个新的div元素，虽然我们可以在关闭的时候移除弹出的弹窗，但是，这样频繁的创建和删除
 * 并不好，特别是对于性能会有很大的影响，对DOM频繁的操作会引起重绘等，从而影响性能，因此这是非常不好的习惯。现在，我们学习了单例模式之后，就可以使用
 * 单例模式来优化弹窗的实现，我们只实例化一次就可以了：
 */
const CreateWin = (function () {
  let div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "我是弹窗内容";
      div.style.display = "none";
      document.body.appendChild = div;
    }
    return div;
  };
})();

document.getElementById("Id").onclick = function () {
  let win = CreateWin();
  win.style.display = "block";
};

/**
 * 理解编写通用的单例模式
 *
 * 上面的弹窗虽然完成了使用单例模式创建弹窗的效果，但是代码并不通用，比如上面是完成弹窗的代码，假如我们以后需要在页面中一个iframe呢？我们是不是需要
 * 重新创建iframe的代码呢？显然没有必要，我们可以考虑把通用的代码分离出来，使代码变成完全抽象：
 */
const getInstance3 = function (fn) {
  let result;
  return function () {
    return result || (result = fn.call(this, arguments));
  };
};

/**
 * 如上代码：我们使用一个参数fn传递进去，如果result这个实例存在的话，直接返回，否则，当前的getInstance2函数调用fn这个函数，然后保存到result里面；
 * 现在我们可以传递一个函数进去，不管它是创建div也好，创建iframe也好，总之，如果是这种的话，都可以使用getInstance2来获取它们的实例对象；下面我们
 * 来完整地测试这种实现：
 */
// 创建div
const createWind = function () {
  const div = document.createElement("div");
  div.innerHTML = "我是弹窗";
  div.style.display = "none";
  document.body.appendChild(div);
  return div;
};

// 创建iframe
const createIframe = function () {
  const iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  return iframe;
};

// 获取实例的封装代码
const getInstance = function (fn) {
  let result;
  return function () {
    return result || (result = fn.call(this, arguments));
  };
};

// 测试创建div
const createSingleDiv = getInstance(createWind);
document.getElementById("Id").onclick = function () {
  const wind = createSingleDiv();
  wind.style.display = "block";
};

// 测试创建iframe
const createSingleIframe = getInstance(createIframe);
document.getElementById("box").onclick = function () {
  const _iframe = createSingleIframe();
  _iframe.src = "www.baidu.com";
};
