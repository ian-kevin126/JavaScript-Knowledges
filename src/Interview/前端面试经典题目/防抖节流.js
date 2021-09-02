// debounce

const debounce = (fn, time) => {
  let timer;
  return function (...arg) {
    let that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(that, [...arg])
    }, time);
  }
}

// throttle
const throttle = (fn, time) => {
  let startTime = 0;
  return function (...arg) {
    let that = this;
    let curTime = new Date();
    if (curTime - startTime >= time) {
      fn.apply(that, [...arg]);
      startTime = curTime
    }
  }
}