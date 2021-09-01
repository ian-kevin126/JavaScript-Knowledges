class Promise {
  constructor(excutor) {
    this.value = null;
    this.reason = null;
    this.status = 'pending';
    this.onFullfilledCallback = [];
    this.onRejectedCallback = [];
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.value = value;
        this.status = 'resolved';
        this.onFullfilledCallback.forEach(fn => {
          fn(this.value);
        })
      }
    };
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.reason = reason;
        this.status = 'rejected';
        this.onRejectedCallback.forEach(fn => {
          fn(this.reason)
        })
      }

    }
    try {
      excutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
    return new Promise((resolve, reject) => {
      if (this.status === 'resolved') {
        setTimeout(() => {
          try {
            let res = onFullfilled(this.value);
            resolve(res)
          } catch (err) {
            reject(err)
          }
        });
      };
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let res = onRejected(this.reason);
            resolve(res)
          } catch (err) {
            reject(err)
          }
        });
      }
      if (this.status === 'pending') {
        this.onFullfilledCallback.push(() => {
          setTimeout(() => {
            try {
              let res = onFullfilled(this.value);
              resolve(res)
            } catch (err) {
              reject(err)
            }
          });
        });
        this.onRejectedCallback.push(() => {
          setTimeout(() => {
            try{
              let res = onRejected(this.reason);
              resolve(res)
            } catch(err){
              reject(err)
            }
          });
        })
      }
    })
  }
};


module.exports = Promise