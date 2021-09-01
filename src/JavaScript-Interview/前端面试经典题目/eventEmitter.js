// 手写EventEmitter 发布订阅
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(type, listener) {
    let listeners = this.listeners[type];
    if (listeners === undefined) {
      listeners = [listener]
    } else {
      listeners.push(listener)
    }
  }

  off(type, listener) {
    let listeners = this.listeners[type];
    if (listeners === undefined || listeners.length === 0) {
      return
    } else {
      for (let index = 0; index < listeners.length; index++) {
        var curListener = listeners[index];
        if (curListener === listener) {
          listeners.splice(index, 1)
        }
      }
    }
  }

  emit(type, ...arg) {
    let listeners = this.listeners[type];
    if (listeners === undefined || listeners.length === 0) {
      return
    } else {
      for (let index = 0; index < listeners.length; index++) {
        var curListener = listeners[index];
        curListener(...arg)
      }
    }
  }
}