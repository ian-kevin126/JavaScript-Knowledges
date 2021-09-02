// deepCopy
function deepCopy1(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function deepCopy2(obj) {
  var res;
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    res = []
  } else {
    res = {}
  };
  if (typeof obj !== 'object') {
    return
  } else {
    for (var i in obj) {
      var cur = obj[i];
      if (typeof cur === 'object') {
        res[i] = deepCopy2(cur)
      } else {
        res[i] = cur
      }
    }
  };
  return res
}
