// 手写bind

Function.prototype.bind = function (_this, ...arg) {
  var self = this;
  return function () {
    return self.apply(ins, ...arg)
  }
};

