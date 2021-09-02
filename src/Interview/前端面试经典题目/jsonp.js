// 手写JsonP
// jsonP({
//   url: "http://localhost:3001/api/getList",
//   data: { pageNum: 1 },
//   callback: function(data) {}
// })
(function (window) {
  var id = 0;
  function jsonP(options) {
    if (!options) return;
    id++;
    var scriptTag = document.createElement('script'),
      container = document.getElementsByTagName('head')[0],
      url = options.url,
      data = options.data || {},
      callback = options.callback,
      funcName = `jsonP${id}`,
      params = [];
    data['callback'] = funcName;
    for (var i in data) {
      params.push(`${i}=${data[i]}`)
    };
    window[funcName] = function (res) {
      callback && callback(res);
      container.removeChild(scriptTag);
      delete window[funcName];
    }
    url += url.indexOf('?') > 0 ? '?' : '&';
    url += ary.join('&');
    scriptTag.type = 'text/javascript';
    scriptTag.src = url;
    container.appendChild(scriptTag);
  };
  window.jsonP = jsonP;
})(window)
