const prompt = require('prompt-sync')();

function print_line(){
    //to tell the while loop to stop or not
    stop = false;
    // while stop is false, continue the loop
    while (!stop){
        //set output
        output = "";
        howMany = parseInt(prompt("How many emojis should I print? "));
        //if howmany is negative (as said in the instructions)
        if (howMany < 0){
            // say bye, and set stop to true
            console.log("Bye!");
            stop = true;
        }
        // if howmany is 0 or above
        else{
            // then start added a certain number of emojis (howMany) to the output variable
            for (let i = 1; i <= howMany; i++){
                output += "✌";
            }
            // output the output variable
            console.log(output);
        }
    }
}



function print_square(){
    // stop for while loop
    stop = false;
    // while stop is false, keeping running the while loop
    while(!stop){
        // ask how big they want the square
        howBig = parseInt(prompt("How big do you want the square? "));
        // if howbig is negative, say bye, and set stop to false (stopping the while loop)
        if (howBig < 0){
            console.log("Bye!");
            stop = true;
        }
        else{
            // nested for loop with x as the outside, y as the inside.
            // you can thing of it as x being the number of columns, and y being the rows
            // since both are the same, it will be a square
            for(let x = 1; x <= howBig; x++){
                // set the total variable for each iteration of the nested for loop
                total = "";
                // both for loops say that the variable starts at 1, the limit is howbig, and it goes up by 1
                for(let y = 1; y <= howBig; y++){
                    // add soccer ball to the total
                    total += "⚽";
                }
                // log it out
                console.log(total);
            }
        }
    }

}

function print_outline(){
    // stop for while loop
    stop = false;
    // while stop is false, run the while loop
    while (!stop){
        // asks how big the square with outline is, and converts it to an integer
        howBig = parseInt(prompt("How big do you want the outlined square?: "));
        // if howBig is negative, say bye, and stop the while loop
        if (howBig < 0){
            console.log("Bye!");
            stop = true;
        }
        else {
            
            for (let x = 1; x <= howBig; x++){
                // set the total variable for each iteration of the nested for loop
                total = "";
                // nested for loop
                for (let y = 1; y <= howBig; y++){
                    // if x is either 1 (first line) or howBig (last line), we set the entire line to be the same emoji
                    if ((x == howBig)||(x == 1)){
                        total += "⚽";
                    }
                    else{
                        // else, we check if the y position is first or last (the outline), and we add the appropriate emoji
                        if((y==1)||(y==howBig)){
                            total += "⚽";
                        }
                        // else, we fill it with footballs
                        else{
                            total += "🏈";
                        }
                    }
                }
                // log out the total at the end
                console.log(total);
            }
        }
    }
}


function print_diamond(){
    // set stop to false
    stop = false;
    // if stop is false, keep running the while loop
    while (!stop){
        // ask how wide the diamond should be, and parse it into an integer
        howBig = parseInt(prompt("How wide do you want the diamond? "));
        // if its negative, say bye, and set stop to true
        if (howBig < 0){
            console.log("Bye!");
            stop = true;
        }
        else {
            // for the outside for loop, we basically set it so that the length of the diamond is twice the size of the width, minus one.
            // we minus one because the diamond only has 1 widest point
            for (let x = 0; x < ((howBig*2)-1); x++){
                // set the total for each iteration
                total = "";
                for (let y = 0; y <= howBig; y++){
                    // if x is smaller than howBig, we know that since the for loops start at 0, anything smaller than 0 is the top part of the diamond
                    if (x < howBig){
                        // then we check, if the y position is where the ball should be
                        // the ball increases in size every x iteration, so howBig-x tells us at what position the ball should start, so therefore anything bigger is a ball
                        if (y >= (howBig-x)){
                            total += "⚽";
                        }
                        // if its not a ball, it's a space
                        else{
                            total += " ";
                        }
                    }
                    // if its not on the top side of the diamond, its the bottom
                    else{
                        // x%howBig is basically looping through the range of howBig, so 3 more than howBig will be 3, etc
                        // we add 1 because the for loop starts at 0
                        if (y > (x%howBig+1)){
                            total += "⚽";
                        }
                        // if its not a ball, its a space
                        else{
                            total += " ";
                        }
                    }
                    
                }
                // output that line
                console.log(total);
            }
        }
    }
}

//Testing
print_line();
print_square();
print_outline();
print_diamond();
