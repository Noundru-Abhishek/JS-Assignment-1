// Variables for demonstration
let firstName = "John";
let lastName = "Doe";
let age = 30;
let city = "New York";

// Using template literals to embed expressions within strings
let greeting = `Hello, my name is ${firstName} ${lastName}.`;
let introduction = `I am ${age} years old and I live in ${city}.`;

// Formatting strings using multi-line strings
let multiLineString = `
Hello, my name is ${firstName} ${lastName}.
I am ${age} years old and I live in ${city}.
Nice to meet you!
`;

// Printing results to the console
console.log("Greeting:", greeting);                  // Output: Hello, my name is John Doe.
console.log("Introduction:", introduction);          // Output: I am 30 years old and I live in New York.
console.log("Multi-Line String:", multiLineString);  // Output: Multi-line formatted string
