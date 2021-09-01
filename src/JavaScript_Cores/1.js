let a =  {
  name:'kevin',
  age: 22
}

function change(o) {
  o.age = 18;
  o = {
    name: 'tom',
    age: 33
  }
  return o
}

let b = change(a);
console.log(a.age);
console.log(b.age);