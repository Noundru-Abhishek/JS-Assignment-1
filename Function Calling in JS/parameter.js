// Function to display a message
function displayMessage(message) {
    console.log("Message:", message);
}

// Function to calculate the sum of numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to concatenate array elements
function concatenateArray(elements) {
    return elements.join(" ");
}

// Function to describe a person
function describePerson(person) {
    return `${person.name} is ${person.age} years old and lives in ${person.city}.`;
}

// Calling the functions with different types of values

// Passing a string as an argument
let message = "Hello, world!";
displayMessage(message); // Output: Message: Hello, world!

// Passing numbers as arguments
let num1 = 10;
let num2 = 20;
let sum = calculateSum(num1, num2);
console.log("Sum:", sum); // Output: Sum: 30

// Passing an array as an argument
let words = ["JavaScript", "is", "awesome!"];
let sentence = concatenateArray(words);
console.log("Concatenated Sentence:", sentence); // Output: Concatenated Sentence: JavaScript is awesome!

// Passing an object as an argument
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
let description = describePerson(person);
console.log("Person Description:", description); // Output: John is 30 years old and lives in New York.
