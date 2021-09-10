// 1，问弹出几次弹窗,弹出的是多少?
function test() {
  for (var i = 0; i < 3; i++) {
    var img = document.createElement("img");
    img.src = "img" + i + ".png";
    img.onload = function () {
      alert(i);
    };
    document.body.appendChild(img);
  }
}
test();

/**
 * 汽车之家面试真题
 */
// 1，JSONP原理是什么？如何实现？
// 2，代码的返回值
var a = { a: 1 },
  b = { a: 1 },
  c = a;

// console.log(a == b); // false
// console.log(a === b); // false
// console.log(a == c); // true
// console.log(a === c); // true

// 3，JavaScript 面向对象继承实现
// 4，(function($,undefined){})(zepto)定义中，传入 undefined的作用是什么？
// 5，写出代码返回值
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

// 请写出以下输出结果：
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3 Foo.getName {}
