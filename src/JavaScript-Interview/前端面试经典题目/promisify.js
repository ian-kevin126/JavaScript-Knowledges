// promisify

// readFile = promisify(fs.readFild)
// readFile('./sort.js').then((data) => {}).catch((err) => {})
function promisify(fn) {
  return function (...arg) {
    return new Promise(function (resolve, reject) {
      try {
        res = fn(...arg, (err, ...data) => {
          if (err) {
            reject(err)
          } else {
            if (data.length > 1) {
              resolve([...arg])
            } else {
              resolve(data[0])
            }
          }
        })
      } catch (err) {
        reject(err)
      }
    })
  }
}