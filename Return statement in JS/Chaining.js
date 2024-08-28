// Function to calculate the square of a number
function calculateSquare(number) {
    let result = number * number;
    return result;
}

// Function to add 10 to a number
function addTen(number) {
    let result = number + 10;
    return result;
}

// Function to convert a number to a string with a message
function numberToString(number) {
    let message = `The final result is: ${number}`;
    return message;
}

// Call functions and pass returned values as arguments

// Calculate the square of a number
let number = 5;
let squared = calculateSquare(number);

// Pass the squared value to addTen function
let addedResult = addTen(squared);

// Pass the result of addTen function to numberToString function
let finalMessage = numberToString(addedResult);

// Print the final message
console.log(finalMessage); // Output: The final result is: 35
