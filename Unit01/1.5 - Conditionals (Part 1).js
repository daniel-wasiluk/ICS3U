// 1.5 - Conditionals 1.js PART 1
const prompt = require('prompt-sync')();

// Ask the user for their age
let age = parseInt(prompt("How old are you? "));

// Check if 50 years old or older
if (age >= 50) {
    console.log("You qualify for the senior discount! It's a good day to be old!");
} 
else if (age < 16) {
    // Check if younger than 16
    console.log("You're not old enough to drive yet. Womp Womp.");
}

// Determine if the user's age is even or odd and print that to the screen
if (age % 2 === 0) {
    console.log("Your age is an even number. That's pretty cool!");
} 
else {
    console.log("Your age is an odd number. That's pretty cool!");
}

// Ask the user for their name
let userName = prompt("What is your name? ");

// Conditional checks on the userName
if (userName === "Mr. J") {
    console.log("🐿️"); // secret language to communicate with mr j
} 
else if (userName.length > 7) {
    console.log("You have a long name.");
}

// Ask the user how long their name is
let nameLength = parseInt(prompt("How many characters are in your name? "));

// Checks on the entered name length
if (nameLength === userName.length) {
    console.log("That's correct! ✔️");
} 
else if (nameLength > userName.length) {
    console.log("Too high ✖️");
} 
else {
    console.log("Too low ✖️");
}


//The challenge is with "Ask the user for their age" part of it
