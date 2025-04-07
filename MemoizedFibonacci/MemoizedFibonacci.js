function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  let one = 0;
  let two = 1;
  let result;
  for (let i = 1; i < n; i++) {
    result = one + two;
    one = two;
    two = result;
  }
  return result;
  // console.log(result)
}

// best answer
var fibonacci = (function () {
  var mem = [0, 1];
  return function (n) {
    if (mem[n] === undefined) mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return mem[n];
  };
})();

// 2
var memo = function (f) {
  var cache = {};
  return function (n) {
    if (!cache[n]) cache[n] = f(n);
    return cache[n];
  };
};

var fibonacci = memo(function (n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

//3
var memo = [];
function fibonacci(n) {
  if (memo[n]) {
    return memo[n];
  }
  if (n >= 2) {
    return (memo[n] = fibonacci(n - 2) + fibonacci(n - 1));
  }
  return n;
}

//4
var cache = [];
var fibonacci = function (n) {
  if (n == 0 || n == 1) return n;
  if (cache[n]) return cache[n];
  return (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
};