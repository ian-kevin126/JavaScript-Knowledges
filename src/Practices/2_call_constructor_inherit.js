/**
 * 借用构造函数继承
 * @param {*} name
 * @param {*} age
 *
 * 优点：
 * - 解决了原型链中子类实例共享父类引用属性的问题
 * - 创建子类实例，可以向父类传递参数
 * - 可以实现多继承（call多个父类对象）
 *
 * 缺点：
 * - 实例并不是父类的实例，只是子类的实例
 * - 只能继承父类的实例属性和方法，不能继承父类原型属性和方法
 * - 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log("里面的this", this); // Student {addr: "北京", name: "kevin", age: 19, getAddr: ƒ, greeting: ƒ, …}
    console.log(`${this.name}___${this.age}`); // kevin___19 / tom___22
  };

  this.greeting1 = () => {
    console.log("里面的this", this); // Student {addr: "北京", name: "kevin", age: 19, getAddr: ƒ, greeting: ƒ, …}
    console.log(`${this.name}___${this.age}`); // kevin___19 / tom___22
  };
}

Person.prototype.price = 100;
Person.prototype.grade = {
  math: 90,
  english: 80,
};
Person.prototype.read = function () {
  console.log("外面的this", this);
  console.log(this.name + this.age);
};

function Student(name, age, addr) {
  this.addr = addr;
  this.getAddr = function () {
    console.log(this.addr);
  };
  Person.call(this, name, age);
}

const student_1 = new Student("kevin", 19, "北京");
const student_2 = new Student("tom", 22, "上海");

console.log("student_1", student_1); // Student {addr: "北京", name: "kevin", age: 19, getAddr: ƒ, greeting: ƒ, …}
console.log("student_2", student_2); // Student {addr: "上海", name: "tom", age: 22, getAddr: ƒ, greeting: ƒ, …}

// student_1.greeting();
// student_2.greeting();

// student_1.greeting1();
// student_2.greeting1();

console.log(student_1.grade); // undefined   无法访问继承父类的原型属性
console.log(student_2.grade); // undefined   无法访问继承父类的原型属性

// student_1.read(); // student_1.read is not a function   无法访问继承父类的原型方法
// student_2.read(); // student_2.read is not a function   无法访问继承父类的原型方法

// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
console.log(student_1.greeting === student_2.greeting); // false
