// function calcFactorialBegInt (x) {
//     return (x != 1n) ? x * calcFactorialBegInt(x-1n) : 1n
// }
// console.log( calcFactorialBegInt(15n));

const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);

console.log(6);