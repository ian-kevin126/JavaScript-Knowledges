const cache = [0,1]
var fib = function (N) {
    if (N === 0) return 0
    if (N === 1) return 1
    if (cache[N]) return cache[N]
    const result = fib(N - 2) + fib(N - 1)
    cache[N]= result
    console.log(cache.join(','))
    return result
};
fib(31)

[ 0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
  1346269 ]