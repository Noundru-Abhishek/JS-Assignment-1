// Global variable representing a user session
var sessionUser = "Abhishek!";

function shoppingCart() {
    // Local variable representing the cart's total
    var cartTotal = 0;
    let items = []; // Block-scoped variable

    function addItem(itemName, itemPrice) {
        items.push(itemName); // items can be accessed here
        cartTotal += itemPrice; // cartTotal is accessible here because it's within scope
        console.log(itemName + " added to the cart. Total is now: " + cartTotal);
    }

    function viewCart() {
        console.log("Cart belongs to: " + sessionUser); // Global variable accessible here
        console.log("Items in the cart: " + items.join(", ")); // Block-scoped variable used correctly
        console.log("Cart Total: $" + cartTotal); // Local variable accessible
    }

    addItem("Laptop", 1500);
    addItem("Mouse", 20);
    viewCart();
}

shoppingCart();

console.log("User session for: " + sessionUser); // Global variable accessible outside
// console.log(cartTotal); // Error: cartTotal is not defined (local to shoppingCart)
// console.log(items); // Error: items is not defined (block-scoped to shoppingCart)

/*Output 
 Laptop added to the cart. Total is now: 1500
 Question2.js:12 Mouse added to the cart. Total is now: 1520
 Question2.js:16 Cart belongs to: Abhishek!
 Question2.js:17 Items in the cart: Laptop, Mouse
 Question2.js:18 Cart Total: $1520
Question2.js:28 User session for: Abhishek! */
