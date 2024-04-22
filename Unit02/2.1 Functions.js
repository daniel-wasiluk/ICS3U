const prompt = require('prompt-sync')();
// make function whoAreYou
function whoAreYou() {
    // receives input through prompt
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    let favouriteHobby = prompt("What is your favourite hobby?");
    // outputs through console
    console.log(`Hello, ${name}, you are ${age} years old and your favourite hobby is ${favouriteHobby}!`);
}

function taxCalculator(dollars) {
    // convert the input to a decimal
    dollars = parseFloat(dollars);
    // calculate the tax and convert it to a number with two decimals
    let taxCalc = parseFloat((dollars * 0.13).toFixed(2));
    // calculate the total and make sure it is a number (parsefloat)
    let total = parseFloat((dollars + taxCalc).toFixed(2));
    // output the original value, the tax calculated, and the total
    console.log(`Original Value: ${dollars.toFixed(2)}\nTax (13%): ${taxCalc.toFixed(2)}\nTotal: ${total.toFixed(2)}`);
}

// function called calculator with "operator" parameter
function calculator(operator) {
    // input through prompt, and parse as float
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // conditionals to check which operator the user selected
    // outputs the result
    if (operator === '+') {
        console.log(num1 + num2);
    } 
    else if (operator === '-') {
        console.log(num1 - num2);
    } 
    else if (operator === '*') {
        console.log(num1 * num2);
    } 
    else if (operator === '/') {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } 
        // if you try to divide by 0, it outputs this:
        else {
            console.log("Cannot divide by zero.");
        }
    } 
    else {
        console.log("Invalid operator.");
    }
}

// gets the parameters as either true, false, or a number
function pythagorean(legA, legB, hypoteneuse) {
    // if hypoteneuse is false
    if (!hypoteneuse) {
        // do this
        console.log(Math.sqrt(legA * legA + legB * legB));
    }
    // if legA is false
    else if (!legA) {
        // do this
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legB * legB));
    } 
    // if all conditions are not met, then only legB remains as false:
    else {
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legA * legA));
    }
}

whoAreYou()
taxCalculator(15)
calculator("*")
pythagorean(5, 5, false)