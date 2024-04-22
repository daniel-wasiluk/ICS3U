// 1.6 Logical Operators
const prompt = require('prompt-sync')();

// default choice is y. if they leave the prompt empty, it does y, else it does the prompt
let choice = prompt("Do you want to play a game? [y]/n: ") || "y";

//if its not n or y, then we tell the user what to do
if (choice !== "n" && choice !== "y") {
    console.log("!!!Error!!!\nPlease input either y or n to play.");
}
// if its n then we stop the code and output a message
else if (choice === "n") {
    console.log("Alright... your loss.");
} 
// last option is to simply start the program
else {
    // user enters the first number, and we check if it is between 10 and 50
    let firstNumber = parseInt(prompt("Enter a whole number: "));
    if (firstNumber > 10 && firstNumber < 50) {
        // if it is we output this
        console.log("The next number you input should be greater than 50!");
    }
    // we get the second number, and check if it is even or odd, and tell them to input the opposite for the next prompt
    let secondNumber = parseInt(prompt("Enter a second whole number: "));
    if (secondNumber % 2 == 0) {
        console.log("The next number you will input should be an odd number");
    } 
    else {
        console.log("The next number you will input should be an even number");
    }
    // get the third number, and check if it is squirrelly
    let thirdNumber = parseInt(prompt("Input a third whole number: "));

    console.log("\nA set of three numbers is considered Squirrelly if their sum+1 is divisible by 10");
    if ((firstNumber + secondNumber + thirdNumber + 1) % 10 == 0) {
        console.log("The sum of your numbers IS considered Squirrelly.");
    } 
    else {
        console.log("The sum of your numbers is NOT considered Squirrelly.");
    }

    // check if 2 of the numbers are divisible by three
    console.log("\nA set of three numbers is considered Jazzy if at least two of the numbers are divisible by 3.");
    let jazzyCount = 0;
    if (firstNumber % 3 == 0) jazzyCount+=1;
    if (secondNumber % 3 == 0) jazzyCount+=1;
    if (thirdNumber % 3 == 0) jazzyCount+=1;

    // output this if it is jazzy
    if (jazzyCount >= 2) {
        console.log("Your numbers are Jazzy.");
    } 
    else {
        // output this if it is not jazzy
        console.log("Your numbers are not Jazzy.");
    }
}