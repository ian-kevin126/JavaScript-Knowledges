/**
 * 寄生组合式继承
 * @param {*} name
 * @param {*} age
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log("newww");
  this.readName = function () {
    console.log(`${this.name}__${this.age}`);
  };
}

Person.prototype.price = 100;
Person.prototype.grade = {
  math: 90,
  english: 80,
};
Person.prototype.hello = function () {
  console.log(`hello ${this.name}`);
};

function Student(name, age, addr) {
  this.addr = addr;
  this.getAddr = function () {
    console.log(`地址: ${this.addr}`);
  };
  Person.call(this, name, age);
}

const F = function () {};
F.prototype = Person.prototype; // 核心代码
Student.prototype = new F(); // 核心代码

const student_1 = new Student("kevin", 19, "北京");
// const student_2 = new Student("tom", 22, "上海");

// console.log("student_1", student_1);
// console.log("student_2", student_2);
