console.log(hotWater());

function hotWater() {
  let waterTemp = "cold";
  waterTemp = waterBoilerSwitch(waterTemp);
  return waterTemp;
}

function waterBoilerSwitch(waterTemp){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return waterTemp;
  } else {
    waterTemp = "cold";
    return waterTemp;
  }
}