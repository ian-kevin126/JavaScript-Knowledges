/**
 * ES6实现适配器模式Adapter
 *
 * 适配器模式的作用是解决两个对象质检的接口不兼容的问题，使用适配器模式之后，原本由于接口不兼容而不能工作的两个对象可以一起工作了
 *
 * 举个生活中的小例子：港式插头转换器，港式的电器插头比大陆的电器插头体积要大一些。如果从香港买一个Mac Book，我们会发现充电器无法插在家里的插座
 * 上，为此而改造家里的插座显然不是最好的办法，所以我们需要一个转接头，这就是适配器。
 *
 * 通过上述例子，我们可以知道适配器模式有三个角色：
 * 目标角色（Target）：大陆的电器插头
 * 源角色（Adaptee）: 港式的电器插头
 * 适配器角色（Adapter）: 把港式的电器插头转成更小大陆的电器插头，来适配大陆插座
 *
 * https://github.com/georgezouq/interview/blob/master/%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81/Adapter.js
 * https://juejin.cn/post/6844903590931202056
 */

// 目标角色实现：由于Target接口实现目标角色，用户期待更小的电器插头
class Target {
  small() {
    throw new Error("This method must be overwritten!");
  }
}

// 源角色实现：Adaptee 属于更大的港式的电器插头，这和用户所期望的不同。所以这里需要引入适配器，去转换成用户所期待的目标接口。
class Adaptee {
  big() {
    console.log("港式的电器插头可用咯~~");
  }
}

// 适配器实现：Adapter 类继承了 Target，重写 small 函数，最后通过适配器，把港式big转成了大陆的small了。
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }
  small() {
    this.adaptee.big();
  }
}

// 测试
let adaptee = new Adaptee();
let adapter = new Adapter(adaptee);
adapter.small();
// # 港式的电器插头可用咯~~

/**
 * 适配器模式的另一种实现
 */
class ActionBase {
  getUserInfo() {}
}

class ActionAdapter extends ActionBase {
  constructor() {
    super();

    this.apiWX = new WXApi();
    this.apiApp = new AppApi();
  }

  getUserInfo(userId, phone, from) {
    if (from === "wx") return this.apiWX.getUserInfo(userId, phone);

    this.apiApp.getUserInfo(userId);
  }
}

class WXApi extends ActionBase {
  getUserInfo(userId, phone) {
    console.log("Get user info from wx");
  }
}

class AppApi extends ActionBase {
  getUserInfo(userId) {
    console.log("Get user info from APP");
  }
}

const adapter = new ActionAdapter();
adapter.getUserInfo("1", "18668888888", "wx");
