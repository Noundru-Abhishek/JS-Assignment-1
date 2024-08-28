// Function with default parameter values
function createGreeting(name = "Guest", age = 18, country = "Unknown") {
    return `Hello, ${name}! You are ${age} years old and from ${country}.`;
}

// Calling the function with all arguments
let greeting1 = createGreeting("Alice", 25, "USA");
console.log(greeting1); // Output: Hello, Alice! You are 25 years old and from USA.

// Calling the function with some arguments
let greeting2 = createGreeting("Bob", 30);
console.log(greeting2); // Output: Hello, Bob! You are 30 years old and from Unknown.

// Calling the function with no arguments
let greeting3 = createGreeting();
console.log(greeting3); // Output: Hello, Guest! You are 18 years old and from Unknown.
