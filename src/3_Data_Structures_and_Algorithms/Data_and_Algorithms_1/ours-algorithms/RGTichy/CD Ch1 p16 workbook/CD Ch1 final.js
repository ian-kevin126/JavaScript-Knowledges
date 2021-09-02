
console.log(fn(3,5,17,9))

function fn(mult,lowNum,highNum,skip) {
  for (var i = lowNum; i < highNum; i++) {
    if (i % mult == 0 && i != skip) {
      console.log(i);
    }
  }
}
