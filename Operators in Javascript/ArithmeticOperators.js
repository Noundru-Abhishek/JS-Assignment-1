// Declaring two numbers
let num1 = 10;
let num2 = 5;

// Performing arithmetic operations
let addition = num1 + num2;          // Addition
let subtraction = num1 - num2;       // Subtraction
let multiplication = num1 * num2;    // Multiplication
let division = num1 / num2;          // Division
let modulus = num1 % num2;           // Modulus (remainder)

// Demonstrating use of parentheses to control order of operations
let result1 = (num1 + num2) * 2;     // Parentheses change order: addition first, then multiplication
let result2 = num1 + (num2 * 2);     // Parentheses ensure multiplication first, then addition

// Printing the results to the console
console.log("Addition (num1 + num2): " + addition);          // Output: 15
console.log("Subtraction (num1 - num2): " + subtraction);    // Output: 5
console.log("Multiplication (num1 * num2): " + multiplication); // Output: 50
console.log("Division (num1 / num2): " + division);          // Output: 2
console.log("Modulus (num1 % num2): " + modulus);            // Output: 0

// Printing results of expressions with parentheses
console.log("Result of (num1 + num2) * 2: " + result1);      // Output: 30
console.log("Result of num1 + (num2 * 2): " + result2);      // Output: 20


/* Output 

Addition (num1 + num2): 15
Subtraction (num1 - num2): 5
Multiplication (num1 * num2): 50
Division (num1 / num2): 2
Modulus (num1 % num2): 0
Result of (num1 + num2) * 2: 30
Result of num1 + (num2 * 2): 20

*/