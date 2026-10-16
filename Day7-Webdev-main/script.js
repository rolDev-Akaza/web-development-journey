//Challenge 2

const price = 500;
const qty = 3;

const Addition = price + qty;
const Subtraction = price - qty;
const Multiplication = price * qty;
const Division = price / qty;
const Remainder = price % qty;

console.log(Addition);
console.log(Subtraction);
console.log(Multiplication);
console.log(Division);
console.log(Remainder);

//Comparison Operators
const score = 85;

const IsScore = score > 90;
const IsScore2 = score >= 85;
const IsScore3 = score < 100;
const IsScore4 = score === 85;
const IsScore5 = score != 85;

console.log(IsScore);
console.log(IsScore2);
console.log(IsScore3);
console.log(IsScore4);
console.log(IsScore5);

//Challenge 4 — If / Else
const age = 17;

if (age >= 18) {
  console.log("You are an Adult");
} else {
  console.log("You are Minor");
}

//Challenge 5 — else if
const score2 = 85;

if (score2 >= 90) {
  console.log("Excellent");
} else if (score2 >= 80) {
  console.log("Very Good");
} else if (score2 >= 75) {
  console.log("Passed");
} else {
  console.log("Failed");
}

//Challenge 6 — Logical Operators
const age6 = 20;
const hasID = true;
const isBanned = false;

if (age6 >= 18 && hasID == true && isBanned == false) {
  console.log("You can enter");
} else {
  console.log("You can't enter");
}

//Challenge 7 — Ternary Operator
const score7 = 72;

const result = score7 >= 75 ? "Passed" : "Failed";

console.log(result);

// const age = 20;
// const hasID = true;

// const message = age >= 18 && hasID === true
//     ? "You can enter"
//     : "You cannot enter";

// console.log(message);

// Next: Challenge 8 — Final Boss
const age8 = 20;
const hasID8 = true;
const hasVIPPass8 = false;

const message =
  (age8 >= 18 && hasID8 === true) || hasVIPPass8 === true
    ? "You can enter"
    : "You cannot enter";
console.log(message);

// Challenge 9 — The Mini Logic Test
const username = "RJ";
const password = "12345";
const isBanned9 = false;
// Ternary Method
// const message2 =
//   username === "RJ" && password === "12345" && isBanned === false
//     ? "Login Successful"
//     : "Login Failed";
// console.log(message2);

// if else statement
if (username === "RJ" && password === "12345" && isBanned9 === false) {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

// For loop
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// Challenge 3 — Countdown!
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");

// Challenge 4 — Sum of Numbers
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);

// Challenge 5 — Multiplication Table

let multiply = 5;

for (let i = 1; i <= 10; i++) {
  multiply = multiply * i;
}
console.log(multiply);
