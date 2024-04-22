
function is_it_the_weekend(day){
    // if the day is 1 or 7, it outputs true
    if (day === 1 || day === 7){
        return true;
    }
    // else it's false
    else {
        return false;
    }
}

function evNineIble(value){
    // checks if the value is divisible by 9 or 2, if it is then return true
    if ((value%9==0)&&(value%2==0)){
        return true;
    }
    // else return false
    else {
        return false;
    }
}
// returns the area of a circle, from its radius
function area_circle(r){
    return(`The area of the circle is: ${Math.PI * r**2} units^2`);
}

// returns the area of a cylinder's label, from its radius and height
function area_label(r, h){
    return(`Area of the Cylinder's label: ${2 * Math.PI * r * h} units^2`);
}

//returns the sruface area of a cylinder from its radius and height. it uses the functions area_circle and area_label
function area_cylinder(r, h){
    return `Surface area of the Cylinder: ${(2 * area_circle(r)) + (area_label(r,h))}`;
}

function ghost_watch(polter, wolter){
    // checks if polter and wolter are both angry or both laughing. returns true if it's the case
    if ((polter == "angry" && wolter == "angry") || (polter == "laughing" && wolter == "laughing")){
        return true;
    }
    // assumes angry is 0, laughing is 1, and neutral is 2. if both are angry or both are laughing it returns true
    else if ((polter == 0 && wolter == 0) || (polter == 1 && wolter == 1)){
        return true;
    }
    // assumes if polter or wolter are laughing or angry it is true
    else if (polter && wolter){
        return true;
    }
    else {
        return false;
    }
}

//Testing
console.log(is_it_the_weekend(1))
console.log(evNineIble(36))
console.log(area_circle(7))
console.log(area_label(9, 5))
console.log(area_cylinder(7, 2))
console.log(ghost_watch("angry", "laughing"))
