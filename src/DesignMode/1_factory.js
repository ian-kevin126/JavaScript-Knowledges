/**
 * 1、工厂模式
 * 工厂模式是为了解决多个类似对象声明的问题，也是为了解决实例化对象产生重复的问题。
 *
 * 优点：
 * - 能解决多个相似的问题
 *
 * 缺点：
 * - 无法知道对象识别的问题（对象的类型不知道）
 *
 */

/**
 * 简单工厂模式
 * @param {*} name
 * @param {*} age
 * @param {*} sex
 * @returns
 */
function CreatePerson(name, age, sex) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sex = sex;
  obj.sayName = function () {
    return this.name;
  };

  return obj;
}

const person_1 = new CreatePerson("kevin", 19, "MALE");
const person_2 = new CreatePerson("tom", 22, "FEMALE");
console.log(typeof person_1); // object
console.log(typeof person_2); // object

/**
 * 复杂工厂模式
 * 将其成员对象的实例化推迟到子类中，子类可以重写父类接口方法以便创建的时候指定自己的对象类型。父类只对创建过程
 * 中的一般性问题进行处理，这些处理会被子类继承，子类质检是相互独立的，具体的业务逻辑会放在子类中进行编写，父类
 * 就变成了一个抽象类，但是父类可以执行子类中相同类似的方法，具体的业务逻辑需要放在子类中去实现。
 *
 * 比如：我们现在要开几个自行车点，那么每个店都有几种型号的自行车出售，我们现在使用工厂模式来编写这些代码：
 */

// 父类的构造函数
const BicycleShop = function (name) {
  this.name = name;
  this.method = function () {
    return this.name;
  };
};
BicycleShop.prototype = {
  constructor: BicycleShop,

  // 卖自行车方法
  sellBicycle: function (model) {
    const bicycle = this.createBicycle(model);
    // 执行A业务逻辑
    bicycle.A();
    // 执行B业务逻辑
    bicycle.B();

    return bicycle;
  },

  // 如果直接实例化父类，调用这个createBicycle方法，会抛出一个error，因为父类是一个抽象类，不能被实例化，只能通过子类来实现这个方法，实现自己的业务逻辑。
  createBicycle: function (model) {
    throw new Error("父类是抽象类，不能直接调用，需要子类重写该方法");
  },
};

/**
 * 实现原型继承
 * @param {*} Sub：子类
 * @param {*} Sup：超类
 */
function extend(Sub, Sup) {
  // 新建一个中间函数
  const F = function () {};
  // 将中间函数的原型指向超类的原型
  F.prototype = Sup.prototype;
  // 将子类的原型指向中间函数的实例
  Sub.prototype = new F();

  // 修复子类原型的构造器：重置子类的原型构造器为自身
  Sub.prototype.constructor = Sub;

  // 在子类中保存超类的原型，避免子类与超类耦合
  Sub.sup = Sup.prototype;

  if (Sup.prototype.constructor === Object.prototype.constructor) {
    // 检测超类原型的构造器是否为原型自身
    Sup.prototype.constructor = Sup;
  }
}

/**
 * 子类实现
 * @param {*} name
 */
const BicycleChild = function (name) {
  this.name = name;
  // 继承构造函数父类中的属性和方法
  BicycleShop.call(this, name);
};

// 子类继承超类原型和方法
extend(BicycleChild, BicycleShop);

// 子类重写父类的方法
BicycleChild.prototype.createBicycle = function () {
  const A = function () {
    console.log("执行A业务操作");
  };

  const B = function () {
    console.log("执行B业务操作");
  };

  return {
    A,
    B,
  };
};

const childClass = new BicycleChild("优恩");
console.log(childClass);
console.log(childClass.name);
// 下面是实例化之后，执行父类中的sellBicycle这个方法后悔依次调用父类中的A和B方法，A、B方法依次在子类中去编写具体的业务逻辑。
childClass.sellBicycle("mode");

/**
 * 上面只是“优恩”自行车这么一个型号，如果需要生成其他型号的自行车的话，可以编写其他子类，工厂模式最重要的优点是：可以实现
 * 一些相同的方法，这些相同的方法我们可以放在父类中编写代码，那么需要实现具体的业务逻辑，可以放在子类中重写该父类的方法，
 * 去实现自己的业务逻辑，总的来说就以下两点：
 *
 * 1 - 弱化对象间的耦合，放置代码的重复，在一个方法中进行类的实例化，可以消除重复性代码；
 * 2 - 重复性代码可以放在父类中，子类继承与父类的所有成员属性和方法，子类只专注于实现自己的业务逻辑。
 */
