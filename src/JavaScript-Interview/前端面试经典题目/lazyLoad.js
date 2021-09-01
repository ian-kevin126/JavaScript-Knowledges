// 用promise实现图片懒加载

function lazyLoad(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function (ev) {
      resolve(ev)
    };
    img.onerror = function (ev) {
      reject(ev)
    };
    img.src = src;
  })
}