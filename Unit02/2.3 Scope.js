// Moved this outside the function, due to scope
let waterTemp = "cold";

function waterBoilerSwitch(){
    if (waterTemp == "cold") {
      waterTemp = "hot";
      return true;
    } else {
      waterTemp = "cold";
      return false;
    }
  }

function hotWater() {
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
    
  }
  return waterTemp;
}

console.log(hotWater());
