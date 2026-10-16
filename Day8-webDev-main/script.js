// For loop
console.log("For loop")
for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }

  console.log(stars);
}


console.log("While Loop")
// while loop

// let i = 10;

// while (i >= 1 ){
//     console.log(i);
//     i--;  
// }
// console.log("Blast off!")

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

let i = 2;
let sum = 0;

while (i <= 20) {
    console.log("Even number: " + i);

    sum = sum + i;

    i += 2;
}

console.log("Total sum: " + sum);


// function

function showMotivation(){
    console.log("Discipline creates freedom.");
}
showMotivation();
showMotivation();

// function Parameters

function greet(name, age){
    console.log("My name is " + name + ", and I am " + age + " years old.");
}
greet("Roland", 24);

// function return

// function add(a, b){
//     return a * b

// }

// let result = add(4, 5);

// console.log(result)

function calculateTotal(a, b){
    return a * b;


}

let total = calculateTotal(100, 3);
console.log(total)


//Function Final Challenge

function checkGrade(score) {
    if (score >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
}

console.log(checkGrade(85));
console.log(checkGrade(60));

// Challenge 1: Even or Odd

function checkNumber(number){
    if(number % 2 === 0){
        return number + " is Even";
    }else{
        return number + " is Odd";
    }
}
console.log(checkNumber(8));
console.log(checkNumber(7));

//Challenge 2: Calculate Total

function calculateTotal(price, quantity){
    return price * quantity;
}

let result = calculateTotal(500, 3);
console.log(result);

//Challenge 3: Grade Checker

function checkGrade(score){
    if(score >= 75){
        console.log("Passed");
    }else{
        console.log("Failed");
    }
}

checkGrade(74)

// Challenge 4: Sum of Numbers

let add = 0;

for (let i = 1; i <= 10; i++) {
  add = add + i;
}

console.log("Total: " + add);