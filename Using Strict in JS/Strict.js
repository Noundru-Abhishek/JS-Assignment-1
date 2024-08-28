"use strict"; // Enabling strict mode

// Example of a common error that strict mode catches
function exampleFunction() {
    // Uncommenting the following line will cause an error in strict mode
    // x = 10; // Error: x is not defined

    let y = 20; // Correct way to declare a variable
    console.log("Value of y:", y);
    
    // Example of assigning a value to a variable without declaring it (will cause an error in strict mode)
    // Uncommenting the following line will cause an error in strict mode
    // undeclaredVariable = 30; // Error: undeclaredVariable is not defined

    console.log("Strict mode is active.");
}

// Calling the function
exampleFunction();

// Attempting to use `with` statement (which is not allowed in strict mode)
// Uncommenting the following line will cause an error in strict mode
// with (Math) { x = cos(0); } // Error: 'with' statements are not allowed in strict mode

console.log("Strict mode demonstration complete.");
