// These are some arrays for testing  
let someNumbers = [2,4,5,0,5,1,4,-10];
let test_array2 = ["castle", "-98", "cookie", "sandwich", "Hi"];
let test_array3 = ["Hello", "4", 3, "s'up?", true];
let my_strings = ["Hello", "Goodbye", "Coding is fun!", "Strings are easy.", "zzzzzzz"]

// This function outputs everything in an array to the console
function print_array(arr){
    // loop starts at 0, goes until the amount of things in the array, and goes up by 1 each time
    for (let i = 0; i <= arr.length; i++){
        // loops through the array and prints the value at the key i
        console.log(arr[i]);
    }
}

// this function finds the smallest value in an array and returns it
function min(arr){
    // i decided to use an array to store the minimum value, so that i could practice pop and push
    newvalue = [arr[0]]
    // starts at 0, and goes until the length of the array
    for (let i = 0; i <= arr.length; i++){
        // if the value at the i position in the array is smaller than the newvalue...
        if (arr[i]<newvalue[0]){
            // the previous minimum value is popped (removed)
            newvalue.pop()
            // new value is pushed (added)
            newvalue.push(arr[i])
        }
    }
    // the new value is returned)
    return(newvalue[0])
}

// this function prints the length of the longest value in an array
function longest_string(arr){
    // set the total
    let total = 0;
    // loop runs from i to the length of the array, and increments by 1 each time
    for (let i = 0; i < arr.length; i++){
        // if the length of the current value of i in the array is larger than the value of total, then set total to the length of arr[i]
        if (arr[i].length > total){
            total = arr[i].length
        }
    }
    // return the longest length
    return total;
}

// this function tells you whether true or false the array contains a value
function contains(arr, value){
    // contains is set to false
    contains = false;
    for (let i=0; i < arr.length; i++){
        // if the value of arr[i] is equal to value in type and value, then contains is set to true
        // 2 === "2" would not return true
        if (arr[i]===value){
            contains = true;
        }
    }
    // returns true or false, based off if it contains or not
    return contains
}

// this function outputs the minimum and maximum value of the array in this format [ min, max ]
function min_max(arr){
    // sets the array for output
    minmax = []
    // the first value (minimum) of mixmax is set to be the first value of the array
    minmax[0] = arr[0]
    // the second value (maximum) of minmas is set to be the first value of the array
    minmax[1] = arr[0]
    // the loop runs from 0 to the length of the array, and increments by 1 each time
    for(let i=0; i < arr.length; i++){
        // if the value of arr[i] is smaller than the minimum (minmax[0]), then it is set to be minmax[0]
        if (arr[i] < minmax[0]){
            minmax[0] = arr[i]
        }
        // if the value of arr[i] is larger than the maximum (minmax[1]), then it is set to be minmax[1]
        else if (arr[i] > minmax[1]){
            minmax[1] = arr[i]
        }
    }
    // returns the minmax array
    return minmax
}

// this function adds every value in an array that is either a number, a number in a string that can be converted ("2"), or true (true is +1)
function sum(arr){
    // sets the total to 0
    total = 0;
    // the loop runs from 0 to the length of the array, and increments by 1 each time
    for (let i = 0; i < arr.length; i++){
        // value is set to Number(arr[i])
        value = Number(arr[i])
        // if value is a number
        if(!isNaN(value)){
            // it is added to the total
            total += value
        }
    }
    // return the total at the end
    return total;
}

// this function reverses all the strings in the array, and in reverse order (eg: ["two", "one"] --> ["eno", "owt"]
function reverse_strings(arr){
    // sets the output array
    outputarr = []
    // since we are outputting the array in reverse order, we start from the length of the array-1, and goes to 0. we decrement by 1 each time.
    for (let x = arr.length - 1; x >= 0; x--){
        // the "adding" variable store the reverse of the word, and we push it to the output array later
        adding = "";
        // we start from the length of the array, and end at 0 again
        for (let y = arr[x].length; y >= 0; y--){
            // we add the charAt y of the string in the x position of the array
            // y is essentially arr[x].length - y (starts at the last character, and goes to the first one)
            adding += arr[x].charAt(y)
        }
        // add the string we just manupulated
        outputarr.push(adding)
    }
    // log out the output array
    console.log(outputarr)
}

//Testing
print_array(someNumbers)
console.log(min(someNumbers))
console.log(longest_string(test_array2))
console.log(contains(someNumbers, 2))
console.log(min_max(someNumbers))
console.log(sum(test_array3))
console.log(reverse_strings(my_strings))
