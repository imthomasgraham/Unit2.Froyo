// Global Variables will be listed below

// Functions will be listed below

const myFroyo = prompt(
  "Hello, Welcome to Andy's Froyo Ice Cream Dessert.n\ Please enter your favorite Ice Cream flavor and we will get back to you.n\ Vanilla,Strawberry,Mint"
);

const froyoFlav = myFroyo.split(",");

const flavnum = {};

froyoFlav.forEach(function (flavor) {
  flavor = flavor.trim();
  if (flavnum[flavor]+= 1) {
  } else {
     flavnum[flavor] = 1;
  }
});

console.log("Froyo Flavors");
console.log(flavnum);
