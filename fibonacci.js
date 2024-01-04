function fibonacci(n) {
  if (n == 1) {
    return [0, 1];
  } else {
    let array = fibonacci(n - 1);
    let copy = array.slice();
    array.push(copy.pop() + copy.pop());
    return array;
  }
}
console.log(fibonacci(100));
