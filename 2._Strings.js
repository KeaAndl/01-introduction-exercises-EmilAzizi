// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const floatNumberOne = parseFloat(numberOne);
const floatNumberTwo = parseFloat(numberTwo);

console.log(floatNumberOne);
console.log(floatNumberTwo);


// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(floatNumberOne + floatNumberTwo);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const twoDecimalsOne = parseFloat(anotherNumberOne);
const twoDecimalsTwo = parseFloat(anotherNumberTwo);

const numbersAdded = twoDecimalsOne + twoDecimalsTwo;

console.log(numbersAdded.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageNumber = (one + two + three) / 3;

console.log(averageNumber.toFixed(5))


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const newLetters = letters.split("");

console.log(newLetters.indexOf("c"));
console.log(newLetters[2]);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const updatedFact = fact.replace("javascript!", "Javascript!");

console.log(updatedFact);

// --------------------------------------



