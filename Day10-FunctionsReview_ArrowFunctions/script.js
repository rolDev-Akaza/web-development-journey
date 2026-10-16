// Arrow Functions


// Example

const add = (a, b) => {
  return a + b;
};
console.log(add(10, 10));

// Let's break down the arrow function:
// - const add — creates a variable to hold the function.
// - (a, b) — receives two parameters.
// - => — the arrow function symbol.
// - { return a + b; } — performs the calculation and returns the result.
// - ; — ends the assignment statement.

// Shorter arrow functions
const square = (number) => number * number;

console.log(square(5));


// Day 10 Challenge
const subtract = (a, b) => {
    return a - b;
}
console.log(subtract(20, 8));

//shorter arrow function

const substract = (a, b) => a - b;
console.log(substract(20, 8));

//Challenge 3 Pass or Fail
const checkGrade = (score) => {
    if(score >= 75){
        return "Passed";
    }else{
         return "Failed";
    }
}
console.log(checkGrade(85));
console.log(checkGrade(60));

//Challenge 4: Discount Calculator
const calculateDiscount = (price, discount) => {
    const totalDiscount = price * discount / 100;
    return price - totalDiscount;
}
console.log(calculateDiscount(2000, 15));