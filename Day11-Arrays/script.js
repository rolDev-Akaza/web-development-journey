//Lesson 1: Array Indexing
//Push and pop
// Push Add sa array
// Pop remove the last array

const games = ["Minecraft", "Valorant", "Roblox"];

games.push("Call of duty");
games.pop();
console.log(games);

// unshift() — magdagdag ng item sa simula ng array.
// shift() — magtanggal ng item sa simula ng array.

const fruits = ["Apple", "Banana", "Mango"];

fruits.unshift("Orange");
fruits.shift();
console.log(fruits);

// // Method	Function
// push()	Add sa dulo
// pop()	Remove sa dulo
// unshift()	Add sa simula
// shift()	Remove sa simula

// Looping Through Arrays

const fruits2 = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}

const games2 = ["Minecraft", "Valorant", "Roblox"];

for (let i = 0; i < games2.length; i++) {
  console.log(games2[i]);
}

// Challenge 3
const scores = [75, 80, 95, 60];

for (i = 0; i < scores.length; i++) {
  console.log(scores[i] + 5);
}

// Challenge 4: Find the total!
const numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);

// Challenge 5: Find the highest score
const scores2 = [75, 92, 68, 100, 85];
let highest = scores2[0];

for (let i = 0; i < scores2.length; i++) {
  if (scores2[i] > highest) {
    highest = scores2[i];
  }
}
console.log("The highest score is " + highest);

// Count the Passing Scores

const scores3 = [65, 80, 75, 90, 55, 88, 72];
let passingCount = 0;
for (let i = 0; i < scores3.length; i++) {
  if (scores3[i] >= 75) {
    passingCount++;
  }
}

console.log("Students who passed: " + passingCount);

// Calculate the Average]
const scores4 = [80, 90, 75, 85, 70];
let total4 = 0;

for (let i = 0; i < scores4.length; i++) {
  total4 = total4 + scores4[i];
}
const average = total4 / scores4.length;

console.log("The average is " + average);

// Challenge 8: Separate Even and Odd Numbers
const numbers2 = [12, 7, 4, 9, 16, 3, 20];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even numbers: " + evenCount);
console.log("Odd numbers: " + oddCount);

// Challenge 9: Find the Smallest Number.

const numbers3 = [45, 12, 89, 7, 34, 3, 21];

let smallest = numbers3[0];

for (let i = 0; i < numbers3.length; i++) {
  // Your code here

  if (numbers3[i] < smallest) {
    smallest = numbers3[i];
  }
}

console.log("The smallest number is " + smallest);

// Challenge 10: Filter Numbersw

const numbers4 = [25, 60, 45, 80, 15, 95, 50];

for (let i = 0; i < numbers4.length; i++) {
  // Your code here
  if (numbers4[i] > 50) {
    console.log(numbers4[i]);
  }
}

// Challenge 11: Create a New Array

const numbers5 = [12, 25, 30, 45, 50, 65, 80];
const bigNumbers = [];

// Your code here
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] > 40) {
    bigNumbers.push(numbers5[i]);
  }
}
console.log(bigNumbers);

// Challenge 12: Sum of Filtered Numbers

const numbers6 = [10, 25, 40, 55, 70, 85];
let total2 = 0;

// Your code here
for (let i = 0; i < numbers6.length; i++) {
  if (numbers[i] > 40) {
    total = total + numbers[i];
  }
}

console.log("Total: " + total);
