// Arithmetic operations with implicit type coercion

// Addition
let addResult1 = "5" + 3;        // "5" (string) + 3 (number) => "53" (string)
let addResult2 = 5 + "3";        // 5 (number) + "3" (string) => "53" (string)

// Subtraction
let subResult1 = "10" - 4;       // "10" (string) - 4 (number) => 6 (number)
let subResult2 = 10 - "4";       // 10 (number) - "4" (string) => 6 (number)

// Multiplication
let mulResult1 = "7" * 2;        // "7" (string) * 2 (number) => 14 (number)
let mulResult2 = 7 * "2";        // 7 (number) * "2" (string) => 14 (number)

// Division
let divResult1 = "20" / 4;       // "20" (string) / 4 (number) => 5 (number)
let divResult2 = 20 / "4";       // 20 (number) / "4" (string) => 5 (number)

// Comparisons with implicit type coercion

// Equality
let eqResult1 = "5" == 5;        // "5" (string) == 5 (number) => true (coerces "5" to 5)
let eqResult2 = "5" == 6;        // "5" (string) == 6 (number) => false

// Strict equality
let strictEqResult = "5" === 5; // "5" (string) === 5 (number) => false (no coercion, different types)

// Inequality
let neResult1 = "10" != 10;      // "10" (string) != 10 (number) => false (coerces "10" to 10)
let neResult2 = "10" != 11;      // "10" (string) != 11 (number) => true

// Greater than
let gtResult1 = "10" > 5;        // "10" (string) > 5 (number) => true (coerces "10" to 10)
let gtResult2 = "10" > 15;       // "10" (string) > 15 (number) => false

// Printing results to the console
console.log("Addition Results:");
console.log('"5" + 3:', addResult1); // Output: "53"
console.log('5 + "3":', addResult2); // Output: "53"

console.log("\nSubtraction Results:");
console.log('"10" - 4:', subResult1); // Output: 6
console.log('10 - "4":', subResult2); // Output: 6

console.log("\nMultiplication Results:");
console.log('"7" * 2:', mulResult1); // Output: 14
console.log('7 * "2":', mulResult2); // Output: 14

console.log("\nDivision Results:");
console.log('"20" / 4:', divResult1); // Output: 5
console.log('20 / "4":', divResult2); // Output: 5

console.log("\nComparison Results:");
console.log('"5" == 5:', eqResult1); // Output: true
console.log('"5" == 6:', eqResult2); // Output: false
console.log('"5" === 5:', strictEqResult); // Output: false
console.log('"10" != 10:', neResult1); // Output: false
console.log('"10" != 11:', neResult2); // Output: true
console.log('"10" > 5:', gtResult1); // Output: true
console.log('"10" > 15:', gtResult2); // Output: false
