/**
 * 原型继承
 * @param {} name
 * @param {*} age
 *
 * 优点：
 * - 父类/父类原型新增的属性和方法，子类都可以访问
 * - 简单，易于实现
 *
 * 缺点：
 * - 无法实现多继承
 * - 原型对象的引用属性被多个实例共享，不管是私有还是公有属性
 * - 创建子类实例，无法像父类构造函数传参
 * - 想要为子类原型新增属性和方法，必须要在 Student.prototype = _person; 之后执行
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log("里面的this", this); // Student {addr: "北京", getAddr: ƒ}
    console.log(`${this.name}___${this.age}__${this.addr}`);
  };

  this.greeting1 = () => {
    console.log("里面的this", this); // Person {name: undefined, age: undefined, greeting: ƒ}
    console.log(`${this.name}___${this.age}__${this.addr}`);
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
}

const _person = new Person();

Student.prototype = _person;

const student_1 = new Student("kevin", 19, "北京");
const student_2 = new Student("tom", 22, "上海");

console.log("student_1", student_1); // Student {addr: "北京", getAddr: ƒ}
console.log("student_2", student_2); // Student {addr: "上海", getAddr: ƒ}

console.log("student_1 addr", student_1.addr); // 北京
console.log("student_2 addr", student_2.addr); // 上海

console.log(
  "student_1 __proto__",
  student_1.__proto__.__proto__ === Person.prototype
); // true
console.log("student_1 __proto__", student_1.__proto__ === _person); // true
console.log("student_2 __proto__", student_2.__proto__); // Person {name: undefined, age: undefined, greeting: ƒ}

console.log("student_1 greeting", student_1.greeting()); // undefined
console.log("student_2 greeting", student_2.greeting()); // undefined

student_1.grade.math = 100;
console.log("student_1 math grade", student_1.grade.math); // 100
console.log("student_2 math grade", student_2.grade.math); // 100
