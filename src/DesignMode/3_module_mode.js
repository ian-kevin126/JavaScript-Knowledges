/**
 * 模块模式
 * 之前我们学到了如何通过字面量的方式来创建单例模式
 * const singleton = {
 *  name: value,
 *  method: function(){}
 * };
 * 模块模式的思路是为单例模式添加私有变量和私有方法能够减少全局变量的使用
 */

// 一个模块模式的代码结构
const singleMode = (function () {
  // 创建私有变量
  let privateNum = 12;

  // 创建私有方法
  function PrivateFunc() {
    // 业务逻辑
  }

  return {
    publicMethod1,
    publicMethod2,
  };
})();

/**
 * 模块模式使用了一个返回对象的匿名函数，在这个匿名函数内部，先定义了私有变量和函数，供内部函数使用，然后将一个
 * 对象字面量作为函数的值返回，返回的对象字面量中只包含可以公开的属性和方法。这样的话，可以提供外部使用该方法；
 * 由于该返回对象中的公有方法是在匿名函数内部定义的，因此它可以访问内部的私有变量和函数。
 *
 * 什么时候使用模块模式？
 * 如果我们必须创建一个对象并以某些数据进行初始化，同时还要公开一些能够访问这些私有数据的方法，那么我们这个时候
 * 就可以使用模块模式了。
 *
 * 理解增强的模块模式
 * 增强的模块模式的使用场合是：适合哪些单列必须是某种类型的实例，同时还必须添加某些属性和方法对其中加以增强的
 * 情况。
 */

function CustomType() {
  this.name = "kevin";
}

CustomType.prototype.getName = function () {
  return this.name;
};

const application = (function () {
  // 定义私有变量
  let privateA = "aa";
  // 定义私有方法
  function A() {}

  // 实例化一个对象后，返回该实例，然后为该实例增加一些公有属性和方法
  const object = new CustomType();

  // 添加公有属性
  object.A = "aa";
  // 添加公有方法
  object.method = function () {
    return privateA;
  };

  // 返回该对象
  return object;
})();

console.log(application); // CustomType {name: "kevin", A: "aa", method: ƒ}
console.log(application.A); // aa
console.log(application.method()); // aa
console.log(application.name); // kevin
console.log(application.getName()); // kevin
