//If else statement

const English = 90;
const Coding = 80;
const Science = 75;
const Math = 66;

if (English >= 90) {
  console.log("Excellent: English");
} else if (English >= 80) {
  console.log("Very Good: English");
} else if (English >= 75) {
  console.log("Passed: English");
} else {
  console.log("Failed: English");
}

if (Coding >= 90) {
  console.log("Excellent: Coding");
} else if (Coding >= 80) {
  console.log("Very Good: Coding");
} else if (Coding >= 75) {
  console.log("Passed: Coding");
} else {
  console.log("Failed: Coding");
}

if (Science >= 90) {
  console.log("Excellent: Science");
} else if (Science >= 80) {
  console.log("Very Good: Science");
} else if (Science >= 75) {
  console.log("Passed: Science");
} else {
  console.log("Failed: Science");
}

if (Math >= 90) {
  console.log("Excellent: Math");
} else if (Math >= 80) {
  console.log("Very Good: Math");
} else if (Math >= 75) {
  console.log("Passed: Math");
} else {
  console.log("Failed: Math");
}

//Logical Operators

//Logical Operator: OR  ||
const isStudent = false;
const hasWork = false;

if (isStudent === true || hasWork === true) {
  console.log("You are busy");
} else {
  console.log("You are free");
}

//Logical Operator: and &&
const age = 17;
const hasID = true;

if (age >= 18 && hasID === true) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}

//Logical Operator: not !
const isAdmin = true;

if (!isAdmin) {
  console.log("You are not an admin");
} else {
  console.log("You are an admin");
}

const agee = 20;
const hasIDD = true;
const isBanned = false;

if (agee >= 18 && hasIDD === true && !isBanned) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}

//Combining && and ||
const age1 = 16;
const hasID1 = false;
const hasVIPPass = true;

if ((age1 >= 18 && hasID === true) || hasID1 === true) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}
