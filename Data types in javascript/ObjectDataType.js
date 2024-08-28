// Creating an object with properties and methods
let person = {
    // Properties
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    // Method to display full name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method to display a greeting
    greet: function() {
        console.log("Hello, " + this.getFullName() + "!");
    },

    // Method to increment age
    haveBirthday: function() {
        this.age += 1;
    }
};

// Accessing properties
console.log("First Name:", person.firstName);  // Output: John
console.log("Last Name:", person.lastName);    // Output: Doe
console.log("Age:", person.age);                // Output: 30

// Calling methods
console.log("Full Name:", person.getFullName()); // Output: John Doe
person.greet();                                  // Output: Hello, John Doe!

// Modifying properties
person.firstName = "Jane";
person.lastName = "Smith";
person.age = 25;

// Accessing modified properties
console.log("Updated First Name:", person.firstName); // Output: Jane
console.log("Updated Last Name:", person.lastName);   // Output: Smith
console.log("Updated Age:", person.age);               // Output: 25

// Calling methods after modification
console.log("Updated Full Name:", person.getFullName()); // Output: Jane Smith
person.greet();                                        // Output: Hello, Jane Smith!

// Calling method to increment age
person.haveBirthday();
console.log("Age after birthday:", person.age); // Output: 26
