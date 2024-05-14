const prompt = require('prompt-sync')();


//this function counts up from start to stop
function countUp(start, stop){
    // it starts the count at the value of "start" variable, then goes up to "stop", then goes up once each time
    for (let i = start; i <= stop; i++) {
        // logs out the current count
        console.log(i)
    }
}

// this function counts down from start to stop
function countDown(start, stop){
    // i is set to start, its limit is top, and it goes down each time by 1
    for (let i = start; i >= stop; i--) {
        // logs i
        console.log(i)
    }
}

//this function adds all the digits in a number (eg: 3 would be 1+2+3 = 9)
function sum(n){
    // total is set to 0
    total = 0;
    // i is set to 1 (because instructions say from 1 to n), then the limit is n, and it goes up by 1
    for (let i = 1; i <= n; i++){
        // i is added to total 
        total += i
    }
    // returns the total
    return total
}

// this function checks how many numbers in a number are divisible by 4 (eg: 9. numbers divisible by 4: 4, 8. 2 total numbers divisible)
function count4(begin, end){
    // count, which is used to store all the numbers divisible by 4
    count = 0;
    // i is set to begin, the limit is end, and it checks every number, so it goes up by 1
    for (let i = begin; i <= end; i++){
        // if the number is divisible by 4 (modulus 4, remainder is 0), then...
        if (i % 4 == 0){
            // it adds to the total count
            count ++
        }
    }
    // returns the total count after the for loop
    return count
}

// this function adds the numbers divisible by x from 0 to n, and outputs the total
function sum_divisible(n, x){
    // total used to store total in for loop
    total = 0;
    // i is set to 0 initially, goes up by 1, and the limit is n
    for (let i = 0; i <= n; i++){
        if (i%x==0){
            // if the number is divisible by x, then it adds to the total
            total += i;
        }
    }
    // outputs the total
    return total
}

// Testing
countUp(1,9)
countDown(19,9)
console.log(sum(2))
console.log(count4(5, 45))
console.log(sum_divisible(32, 6))