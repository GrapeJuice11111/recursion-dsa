function fibonacci(n) {
  let arr = [0, 1];
  function fibonacciRecursion(n) {
    if (n == 1) {
      return arr;
    } else {
      let copy = arr.slice();
      arr.push(copy.pop() + copy.pop());
      return fibonacciRecursion(n - 1);
    }
  }
  return fibonacciRecursion(n);
}
console.log(fibonacci(28));
console.log(fibonacci(100));
