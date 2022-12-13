//One

const { string } = require("prop-types");

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

//Nine
//Convert Hours into Seconds
function howManySeconds(hours) {
  return hours * (60 * 60);
}

//Ten
//Buggy Code (Part 7)
function swap(a, b) {
  x = a;
  y = b;
  return [y, x];
}

// Eleven
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
  return length + length + (width + width);
}

// Twelve
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

// Thirteen
//Basketball Points
function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

//fourteen
//Basic Variable Assignment
function nameString(name) {
  var b = " Ali";
  var result = name + b;
  return result;
}

//fifteen
//Less Than 100?
function lessThan100(a, b) {
  let sum = a + b;
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}

// sixteen
// buggy code part 5
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; ) {
    newArray.push(i);
  }

  return newArray;
}

// console.log(printArray(1));

// seventen
