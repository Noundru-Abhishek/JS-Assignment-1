let num1 = 10;
let num2 = 5;
let num3 = '10';

let isEqual = num1 == num3;
let isNotEqual = num1 != num2;
let isStrictlyEqual = num1 === num3;
let isStrictlyNotEqual = num1 !== num3;
let isLessThan = num2 < num1;
let isGreaterThan = num1 > num2;
let isLessThanOrEqual = num1 <= 10;
let isGreaterThanOrEqual = num2 >= 5;

console.log("num1 == num3:", isEqual);
console.log("num1 != num2:", isNotEqual);
console.log("num1 === num3:", isStrictlyEqual);
console.log("num1 !== num3:", isStrictlyNotEqual);
console.log("num2 < num1:", isLessThan);
console.log("num1 > num2:", isGreaterThan);
console.log("num1 <= 10:", isLessThanOrEqual);
console.log("num2 >= 5:", isGreaterThanOrEqual);

/*

Output

num1 == num3: true
num1 != num2: true
num1 === num3: false
num1 !== num3: true
num2 < num1: true
num1 > num2: true
num1 <= 10: true
num2 >= 5: true

*/
