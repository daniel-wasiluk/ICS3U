// Part 2 of conditionals
const prompt = require('prompt-sync')();

// Ask the user for their name
let userName = prompt("What is your name? ");
let age = parseInt(prompt(`Hello ${userName}, how old are you?`));

// Check age for driving eligibility
if (age >= 16) {
    console.log("You are old enough to drive. Go crazy.");
}
else {
    console.log("You are not old enough to drive yet. Grow up!");
}

// Show menu
console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// Ask for selection
let selection = parseInt(prompt(`Hi ${userName}. Please make a selection: `));

if (selection == 1) {
    console.log("Let's play!");
} 
else if (selection == 2) {
    console.log("You selected Options.");
} 
else if (selection == 3) {
    console.log("No new DLC at this time.");
} 
else if (selection == 4) {
    console.log("Everything is up to date.");
} 
else if (selection == 5) {
    console.log("Bye!");
} 
else {
    console.log("Invalid selection.");
}

// Optional challenge 1: Time of day greeting
let hour = parseInt(prompt("Enter an hour between 0-23: "));

if (hour >= 0 && hour <= 11) {
    console.log("Good morning!");
}
else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!");
}
else if (hour >= 18 && hour <= 23) {
    console.log("Good evening!");
}
else {
    console.log("Invalid hour!");
}

// Optional challenge 2: Random number characteristics
let random_number = Math.random() * 10;
random_number = Math.floor(random_number); 

console.log(`Random number: ${randomNumber}`);

// check if the value is zero
if (randomNumber === 0){
    console.log("The value is zero.");
}
// check if the value is even
if (randomNumber % 2 === 0){
    console.log("The value is even.");
}
// check if the value is divisible by 2 and 3
if (randomNumber % 2 === 0 && randomNumber % 3 === 0){
    console.log("The value is divisible by 2 and 3.");
}

// extra prime number thingy
const value = Math.floor(Math.random() * 10);

console.log(`Generated value: ${value}`);

// logs if the value is zero
value === 0 && console.log("The value is zero.");

// logs if its an even number
value && value % 2 === 0 && console.log("The value is even.");

// logs if divisible by 2 and 3
value % 2 === 0 && value % 3 === 0 && console.log("The value is divisible by 2 AND 3.");

// logs if its prime
(value === 2 || value === 3 || value === 5 || value === 7) && console.log("The value is prime.");

