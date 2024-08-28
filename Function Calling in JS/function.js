// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    // Calculate area
    let area = length * width;
    return area;
}

// Function to calculate the volume of a rectangular prism (box)
function calculateBoxVolume(length, width, height) {
    // Calculate volume
    let volume = length * width * height;
    return volume;
}

// Call the functions with arguments
let rectangleLength = 10;
let rectangleWidth = 5;
let boxLength = 10;
let boxWidth = 5;
let boxHeight = 3;

// Calculate area of the rectangle
let area = calculateRectangleArea(rectangleLength, rectangleWidth);
console.log("The area of the rectangle is:", area); // Output: 50

// Calculate volume of the box
let volume = calculateBoxVolume(boxLength, boxWidth, boxHeight);
console.log("The volume of the box is:", volume); // Output: 150
