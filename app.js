// Global Variables will be listed below

// Functions will be listed below

const froyoPro = prompt(
  "Hi there! Welcome to Andys' Froyo Shop.\nEnter the flavors you'd like to order seperated by a comma.\nFlavors: Vanilla, Strawberry, Chocolate, etc.."
);

const froyoArray = froyoPro.split(",");

const flavorsCount = {};

froyoArray.forEach(function (flavor) {
  flavor = flavor.trim();
  if (flavorsCount[flavor]++) {
  } else {
    flavorsCount[flavor] = 1;
  }
});

console.log("Froyo Flavors & Count");
console.log(flavorsCount);
