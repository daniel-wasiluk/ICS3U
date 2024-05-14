// Noah and Dev Daniel

const prompt = require('prompt-sync')();

function reverse(str){
    //in case the user inputs a number
    str = str.toString();

    //declares variables to be used in the while loop
    new_str = "";
    i = 1;
    
    while (str.length != (i-1)){
        //adds the characters in order from last to first, into the new_str variable
        new_str = new_str + str.charAt(str.length - i)
        i++
    }
    // returns it
    return(new_str)
    
}

console.log(reverse("hello there"))

function dragons_and_goblins(str){
    // i is for the while loop, and dragonCount and goblinCount count in the while loop
    i = 0
    dragonCount = 0;
    goblinCount = 0;
    while (i != str.length){
        // if the character is "d", then add to the dragonCount
        if (str.charAt(i) == "d"){
            dragonCount++
        }
        // if the chracter is "g" then add to the goblinCount
        else if (str.charAt(i) == "g"){
            goblinCount++
        }
        i++
    }
    // at the end, return the totals
    return(`Dragons: ${dragonCount} Goblins: ${goblinCount}`)
}
console.log(dragons_and_goblins("dbhfghfgdbchdnwjdg"))

// this function adds all numbers in a string of numbers (eg: 19024, would be 1+9+0+2+4)
function add(str){
    // converts variable to string, in case the user inputted a number (eg: 1231254)
    str = str.toString()
    // variables for while loops
    i = 0;
    total = 0;
    // while i is not equal to the length of the string
    while (i != str.length){
        // parseInt the character at the position in the string, and add it to the total
        total += parseInt(str.charAt(i))
        i++
    }
    // add to the total
    return (total)
}
console.log(add("93507012"))

// this function adds numbers to the total. it only subtracts the number AFTER "-" in the string (eg: "12-3" would be 1+2-3 = 0)
function add_subtract(str){
    // i is for going through the while loop
    i = 0;
    // subtractor tells the loop whether it should subtract or not
    subtractor = false;
    total = 0;
    while(i != str.length){
        // if the while loop encounters "-", it sets subtractor to true....
        if (str.charAt(i)=="-"){
            subtractor = true;
            i++
        }
        // ... so that next time, it subtracts the number, and then sets subtractor to false again.
        else if(subtractor == true){
            total -= parseInt(str.charAt(i))
            subtractor = false
            i++
        }
        // if you do not need to subtract, simply add the number
        else{
            total += parseInt(str.charAt(i))
            i++
        }
    }
    // return the total
    return(total)
}

console.log(add_subtract("543-36-9"))