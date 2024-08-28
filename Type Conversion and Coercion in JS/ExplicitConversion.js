// Original values of different types
let numString = "123";       // String
let boolString = "true";     // String
let numValue = 456;          // Number
let boolValue = false;       // Boolean
let nullValue = null;        // Null
let undefinedValue;          // Undefined

// Converting values to different types

// String to Number
let stringToNumber = Number(numString);  // Converts "123" to 123

// String to Boolean
let stringToBoolean = Boolean(boolString); // Converts "true" (non-empty string) to true

// Number to String
let numberToString = String(numValue);  // Converts 456 to "456"

// Boolean to String
let booleanToString = String(boolValue); // Converts false to "false"

// Null to Number
let nullToNumber = Number(nullValue);   // Converts null to 0

// Undefined to Number
let undefinedToNumber = Number(undefinedValue); // Converts undefined to NaN (Not-a-Number)

// Printing the results to the console
console.log("String to Number:", stringToNumber);            // Output: 123
console.log("String to Boolean:", stringToBoolean);          // Output: true
console.log("Number to String:", numberToString);            // Output: "456"
console.log("Boolean to String:", booleanToString);          // Output: "false"
console.log("Null to Number:", nullToNumber);                // Output: 0
console.log("Undefined to Number:", undefinedToNumber);      // Output: NaN
