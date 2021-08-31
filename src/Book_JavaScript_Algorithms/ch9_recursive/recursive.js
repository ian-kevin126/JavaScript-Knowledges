/**
 * 递归：有一句编程的至理名言——要理解递归，首先要理解递归。递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到
 * 解决最初的大问题。递归通常涉及函数调用自身。
 * function recursiveFunction(someParam){
 *    recursiveFunction(someParam);
 * }
 * 就上述的情况而言，它会一直执行下去，因为，每个地柜都必须有基线条件，即一个不再递归的条件（停止点），以防止无限递归下去。如果忘记加上
 * 用来停止递归的基线条件，递归并不会无限执行下去，浏览器会抛出错误，也就是所谓的栈溢出错误。
 */
function understandRecursion(doIunderstandRecursion) {
  const recursionAnswer = confirm("Do you understand recursion?");
  if (recursionAnswer === true) {
    // 基线条件或停止点
    return true;
  }
  understandRecursion(recursionAnswer); // 递归调用
}

// 阶乘：迭代阶乘
function factorialIterative(number) {
  if (number < 0) return undefined;
  let total = 1;
  for (let i = 2; i <= number; i++) {
    total *= i;
  }
  return total;
}
console.log(factorialIterative(5)); // 120

// 阶乘：递归阶乘
function factorialRecursive(number) {
  if (number < 0) {
    return undefined;
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return factorialRecursive(number - 1) * number;
}

console.log(factorialRecursive(5)); // 120

// 斐波那契数列：迭代版
function fibonacciIterative(num) {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = num;

  for (let i = 2; i <= num; i++) {
    fibN = fibNMinus1 + fibNMinus2; // f(n -1) + f(n - 2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  return fibN;
}

// 菲波那切数列：递归版
function fibonacciRecursive(num) {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

// 记忆化菲波那切数列：记忆化是一种保存前一个结果值的优化技术，类似于缓存。如果我们分析在计算 fibonacci(5) 时的调用
// 就会发现 fibonacci(3) 被计算了两次，因此可以考虑将它的结果存储起来，这样当需要再次计算它的时候，我们就直接从记忆机制里取，避免了计算消耗的性能。
function fibonacciMemorization(num) {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
  };
  fibonacci(num);
  return memo[num];
}

console.log(fibonacciMemorization(10)); // 55
console.log(fibonacciRecursive(10)); // 55
console.log(fibonacciIterative(10)); // 55

const fib = (num) => {
  if (num < 1) return 0;
  if (num <= 2) return 1;

  let n2 = 0;
  let n1 = 1;
  let fibN = 0;

  for (let i = 2; i <= num; i++) {
    fibN = n1 + n2;
    n2 = n1;
    n1 = fibN;
  }

  return fibN;
};
