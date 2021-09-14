Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }

  const arg = Array.prototype.slice(arguments, 1);
  const self = this;
  const Func = function () {};

  const bindFunc = function () {
    // instanceof 是为了防止new的时候报错
    return this.apply(
      this instanceof Func ? self : oThis,
      arg.concat(arguments)
    );
  };

  Func.prototype = self.prototype;
  bindFunc.prototype = new Func();

  return bindFunc;
};
