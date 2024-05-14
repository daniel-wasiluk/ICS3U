//Mr.Jamieson :Nemo:
// Noah Fortin & Dev Daniel
const prompt = require('prompt-sync')();

let start = parseInt(prompt("Starting number: "))
let stop = parseInt(prompt("Stopping number: "))
//Variables for the start and stop part of the code
while (start < stop){
    start = parseInt(prompt("New starting value buddy: "))
    stop = parseInt(prompt("Make this one smaller now: "))
}
//while loop that checks if the user entered their numbers properly
function countdown(start, stop){
    while (start > stop){
        console.log(start);
        start = start-1;
    }
    //Function that repeats the start number until start is less than stop
    return stop;
    //Returns stop
}
console.log(countdown(start, stop));

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Random number in a range of min and max

  
  function random_until(min, max, stop){
    if (min >= max){
        return(-1)
    }
    // If min is more than max it'll return -1
    randInt(min, max)
    if ((stop <= min)&&(stop >=max)){
        return (-1)
        //Same thing
    }
    else{
        let randNum = randInt(min, max)
        //Variable for the random number
        while (randNum != stop){
            console.log(`Random Number: ${randNum}`)
            randNum = randInt(min, max)
        }
        //While loop that keeps running until the stop variable = the randNum one.
    }

  }

random_until(1, 10, 5)
//Numbers

function average(n){
    // sets average and i to 0, so that we can use them in the while loop
    average = 0;
    i = 0;
    while (n != i){
        // asks use for value x/n (eg: 1/5, 2/8)
        number = parseInt(prompt(`Enter value ${i+1}/${n}: `));
        // adds that value to average variable
        average += number;
        // iterates the loops
        i++
    }
    // logs out the average, and fixes it to 2 decimal points
    console.log(`The average is ${(average/n).toFixed(2)}`)
}
average(5)