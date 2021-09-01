// 寄生组合继承

function Human(name, sex) {
  this.name = name;
  this.sex = sex;
}

Human.prototype = {
  constructor: Human,
  sayHello: function () {
    console.log('hello')
  }
}

function Developer(name, sex, skill) {
  Human.call(this, name, sex);
  this.skill = skill;
}

function inherits(constructor, superConstructor) {
  constructor.prototype = Object.create(superConstructor.prototype)
}

inherits(Developer, Human);

Developer.prototype.showOffSkill = function () {
  console.log(`i can do ${this.skill}!!!`)
}

let a = new Developer('aaa','male','go');
