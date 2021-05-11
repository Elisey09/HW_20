const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);

console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(9));