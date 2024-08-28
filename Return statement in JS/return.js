// Function to calculate the square of a number
function calculateSquare(number) {
    // Calculate square
    let result = number * number;
    // Return the result
    return result;
}

// Function to concatenate two strings
function concatenateStrings(str1, str2) {
    // Concatenate strings
    let concatenated = str1 + " " + str2;
    // Return the concatenated string
    return concatenated;
}

// Function to find the maximum of three numbers
function findMax(num1, num2, num3) {
    // Find the maximum number
    let max = Math.max(num1, num2, num3);
    // Return the maximum number
    return max;
}

// Assign returned values to variables

// Call function to calculate square and assign the result
let number = 7;
let square = calculateSquare(number);
console.log("The square of", number, "is:", square); // Output: The square of 7 is: 49

// Call function to concatenate strings and assign the result
let str1 = "Hello";
let str2 = "World";
let greeting = concatenateStrings(str1, str2);
console.log("Concatenated string:", greeting); // Output: Concatenated string: Hello World

// Call function to find the maximum number and assign the result
let num1 = 10;
let num2 = 25;
let num3 = 15;
let maxNumber = findMax(num1, num2, num3);
console.log("The maximum number is:", maxNumber); // Output: The maximum number is: 25
