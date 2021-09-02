
console.log(fn(2,9,3))

function fn(lowNum,highNum,mult) {
  for (var i = highNum; i > lowNum; i--) {
    if (i % mult == 0) {
      console.log(i);
    }
  }
return;
}
