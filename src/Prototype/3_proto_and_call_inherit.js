function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log("new");
  this.readName = function () {};
}

Person.prototype.price = 100;
Person.prototype.grade = {
  math: 90,
  english: 80,
};
Person.prototype.hello = function () {};

function Student(name, age, addr) {
  this.addr = addr;
  this.getAddr = function () {
    console.log(this.addr);
  };
  Person.call(this, name, age); // 第二次
}

Student.prototype = new Person(); // 第一次
Student.prototype.constructor = Student;

const student_1 = new Student("kevin", 19, "北京"); // 调用了两次Person构造函数，生成了两份实例，浪费性能

/**
 * 优点
 * - 可以继承父类的属性和方法，也可以继承父类原型的属性和方法
 * - 不存在引用属性共享问题
 * - 可以传参给父类构造函数
 * - 函数可以复用
 *
 * 缺点：
 * - 调用了两次构造函数，生成了两份实例
 */
