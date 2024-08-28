// Function expression to calculate the square of a number
const square = function(number) {
    return number * number;
};

// Function expression to check if a number is even
const isEven = function(number) {
    return number % 2 === 0;
};

// Function expression to greet a user
const greetUser = function(name) {
    return `Hello, ${name}! Welcome to the program.`;
};

// Call the function expressions with arguments
let number = 5;
let resultSquare = square(number);
let resultIsEven = isEven(number);
let userName = "Alice";
let greeting = greetUser(userName);

// Print the results to the console
console.log(`The square of ${number} is: ${resultSquare}`);   // Output: The square of 5 is: 25
console.log(`${number} is even: ${resultIsEven}`);            // Output: 5 is even: false
console.log(greeting);                                       // Output: Hello, Alice! Welcome to the program.
