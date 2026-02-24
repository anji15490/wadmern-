console.log("== function parameter and return type ==");

// Addition function
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));

// Full name function
function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log("Full Name:", getFullName("Anji", "Duda"));

// Eligibility function
function isEligible(age) {
    return age >= 18;
}
console.log("Is Eligible:", isEligible(20));

// Display message function
function displayMessage(message) {
    console.log("Message:", message);
}
displayMessage("Welcome to TypeScript!");

// Greet user function
function greetUser(name) {
    return name ? "Hello, " + name + "!" : "Hello, Guest!";
}
console.log(greetUser("Student"));
console.log(greetUser());
