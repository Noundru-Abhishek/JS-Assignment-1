// Concatenating strings using the + operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenate strings with a space in between

// Accessing characters using indexing
let firstCharacter = fullName[0]; // First character
let fifthCharacter = fullName[4]; // Fifth character (indexing starts from 0)

// Finding the length of a string
let nameLength = fullName.length; // Length of the string

// Creating substrings
let firstNameSubstring = fullName.substring(0, 4); // Extracts characters from index 0 to 3
let lastNameSubstring = fullName.substring(5);    // Extracts characters from index 5 to the end

// Printing results to the console
console.log("Full Name:", fullName);                 // Output: John Doe
console.log("First Character:", firstCharacter);     // Output: J
console.log("Fifth Character:", fifthCharacter);     // Output: D
console.log("Length of Full Name:", nameLength);     // Output: 8
console.log("First Name Substring:", firstNameSubstring); // Output: John
console.log("Last Name Substring:", lastNameSubstring);   // Output: Doe
