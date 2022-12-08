//One
// Radian To Degree
function radianToDegree(radianNumber) {
  if (typeof radianNumber === "number") {
    const degree = (radianNumber * 180) / 3.14159265359;
    return parseFloat(degree.toFixed(2));
  }
  return "Please Enter a radian number";
}

//Two
// check whether the given file name is a javascript file or not
function isJavaScriptFile(file) {
  if (typeof file === "string") {
    const isJavaScriptFile = file.endsWith(".js");
    return isJavaScriptFile;
  }
  return "please Enter string js file";
}

//Three
// Calculate the total oil price that i have to pay
function oilPrice(diesel, petrol, octen) {
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octen === "number"
  ) {
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octenPrice = octen * 135;
    return dieselPrice + petrolPrice + octenPrice;
  }
  return "Enter a valid Number";
}

//four
// Return Public bus fare for remaining Person
function publicBusFare(person) {
  if (typeof person === "number") {
    if (person >= 50) {
      const busPersons = person % 50;
      const microBusPersons = busPersons % 11;
      const publicBusPersonsFare = microBusPersons * 250;
      return publicBusPersonsFare;
    } else if (person >= 11) {
      const microBusPersons = person % 11;
      const publicBusPersonsFare = microBusPersons * 250;
      return publicBusPersonsFare;
    } else {
      const publicBusPersonsFare = person * 250;
      return publicBusPersonsFare;
    }
  }
  return "Enter a valid Number";
}

//five
// Find out Best Friend between two friends
function isBestFriend(friend1, friend2) {
  if (typeof friend1 === "object" && typeof friend2 === "object") {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
      return true;
    }
    return false;
  }
  return "Enter a Object";
}

//six
//Power Calculator
function circuitPower(voltage, current) {
  return voltage * current;
}

//seven
//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

//Eignt
//Return Something to Me!
function giveMeSomething(a) {
  return "something" + " " + a;
}
