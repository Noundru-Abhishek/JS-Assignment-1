// Declaring some variables for demonstration
let a = 10;
let b = 5;
let c = 15;
let d = 20;

// Combining conditions using logical operators

// Logical AND (&&)
let andCondition = (a > b) && (c < d); // true, because both (a > b) and (c < d) are true

// Logical OR (||)
let orCondition = (a > b) || (c > d); // true, because (a > b) is true, even though (c > d) is false

// Logical NOT (!)
let notCondition = !(a < b); // true, because (a < b) is false, so !(a < b) is true

// Combining all three operators
let combinedCondition = (a > b) && !(c < d) || (d > c); // true, because (a > b) is true, (c < d) is false, and (d > c) is true

// Printing the results to the console
console.log("Logical AND (a > b && c < d):", andCondition);         // Output: true
console.log("Logical OR (a > b || c > d):", orCondition);           // Output: true
console.log("Logical NOT (!(a < b)):", notCondition);               // Output: true
console.log("Combined condition ((a > b) && !(c < d) || (d > c)):", combinedCondition); // Output: true

