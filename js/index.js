// Varibale Declaration - constant with const
const myNumber = 42;
console.log(myNumber);

// Varibale Declaration - mutable with let
let myMutableNumber = 42;
console.log(myMutableNumber);
myMutableNumber = myMutableNumber + 1;
console.log(myMutableNumber);

// Primitive Data Types
const string = "Hello World"; // or "30"
const number = 30.5;
const boolean = true; // or false
const nullDataType = null; // a "planned" none value
const undefinedDataType = undefined; // an "unplanned" none value

console.log(string, number, boolean, nullDataType, undefinedDataType);

// Mathematical Operators

// +
const oneTimeFee = 5;
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee;
console.log(amountToBeCharged);

// -
const sum = 20000;
const alreadyPayed = 5000;
const amountToBePayed = sum - alreadyPayed;
console.log(amountToBePayed);

// *
const length = 4;
const width = 6;
const area = length * width;
console.log(area);

// /
const students = 14;
const groups = 4;
const studentsPerGroup = students / groups;
console.log(studentsPerGroup);

// **
console.log(2 ** 10);

// % (modulus)
console.log(7 % 2);

// Assignment Operators (needs the let keyword)

// +=
let balance = 20;
balance += 5;

console.log(balance);

// -=
let secondBalance = 8;
secondBalance -= 2;
console.log(secondBalance);

// *=
let price = 30;
price *= 2;
console.log(price);

// /=
let secondPrice = 20;
secondPrice /= 4;
console.log(secondPrice);

// ++ same as += 1
let age = 30;
age++;
console.log(age);

// -- same as -=1
let secondAge = 25;
secondAge--;
console.log(secondAge);
