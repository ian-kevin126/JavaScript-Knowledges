// 数组扁平化
function flat1(ary) {
  return JSON.parse('[' + JSON.stringify(ary).replace(/\[|]/g, '') + ']')
}

function flat2(ary) {
  while (ary.some(item => Array.isArray(item))) {
    ary = [].concat(...ary)
  };
  return ary
}
