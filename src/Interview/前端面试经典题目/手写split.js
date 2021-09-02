// 手写字符串split方法

function split(str, separator) {
  var res = [];
  if (!separator) {
    for (var i = 0; i < str.length; i++) {
      res.push(str[i])
    }
  };
  if (typeof separator === 'string' || Object.prototype.toString.call(separator) === '[object RegExp]') {
    var newReg = separator.global ? separator : new RegExp(separator, 'g');
    var startIndex = 0;
    var flag = true;
    while (flag) {
      var resAry = newReg.exec(str);
      if (resAry === null) {
        if (!startIndex) {
          return [str]
        } else {
          res.push(str.slice(startIndex));
          flag = false;
        }
      } else {
        var endIndex = resAry.index;
        var execLength = resAry[0].length;
        res.push(str.slice(startIndex, endIndex));
        flag = true;
        startIndex = endIndex + execLength;
      }
    }
  }
  return res
}

console.log(split('aa xb xbx1c x1cx1 dx1edede', 'x1'));
