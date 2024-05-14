const prompt = require('prompt-sync')();

function negativeOnly(){
    // for checking if the first number inputted is false
    first = false;

    // for checking if the numbers inputted after the first negative are negative or positive
    negative = false;

    // while the first is not true, it keeps running
    while (!first){
        // asks for the negative number
        firstnum = parseInt(prompt("Enter your first negative number: "))
        // if they inputted a negative number, it stops the while loop. else, it keeps going
        if (firstnum < 0){
            first = true;
        }
    }

    // second while loop for checking if the number is negative or positive
    while (!negative){
        // inputs number
        second = parseInt(prompt("Enter a negative number: "))
        // if its positive, the while loop stops
        if(second > 0){
            negative = true;
        }
    }
}


function printOdd(n) {
    // i found this function on w3schools
    // if n is a number, and it is above or equal to 1
    if (typeof(n) == "number" && n >= 1) {
        // sets variable that will be used in while loop
        let i = 1;
        // while n is greater than or equal to i
        while (i <= n) {
            // checks if if the remainder of i/2 is NOT zero
            if (i % 2 != 0) {
                // logs that number
                console.log(i);
            }
            // increments the while loop
            i++;
        }
    }
    // tells the user to check their parameters
    else{
        console.log("Ensure that the parameter filled is a number, and is equal to or above 1.")
    }
}


function parrotUntilQuit(){
    // quit is false
    quit = false
    // while quit is false
    while (!quit){
        // asks user for input
        checkquit = prompt("Enter some text or the word 'quit': ")
        // if they input quit
        if (checkquit == "quit"){
            // it says goodbye, and sets quit to true, ending the while loop
            console.log("Goodbye!")
            quit = true;
        }
    }
}


function factorial(n){
    // sets variables for while loop
    i = 1;
    total = 1;
    // while n+1 is NOT equal to i
    while ((n+1) != i){
        // checks if n is greater than 0
        // it doesnt matter if 0 is inputted and it "doesnt work" because total is set to 0
        if (n > 0){
            // total * i
            total = (total * i)
            // adds to i, moving the while loop along
            i++
        }
        else {
            // if that does not match up, then it tells them what the requirements are for it
            console.log("Enter a number at, or above, 0.")
        }
    }
    // returns the total at the end
    return(total)
}


//Testing the code
negativeOnly()
printOdd(8)
parrotUntilQuit()
console.log(factorial(10))