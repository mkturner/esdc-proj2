// Question 2
// after identifying the variables, specify which their primitve data types

let shiftValue = Number(3); // shiftValue should be a const, however using let to reuse for question 4
let location = String('Rome');
const alphabet = String('abcdefghijklmnopqrstuvwxyz');
const lengthOfAlphabet = Number(alphabet.length);
let uncodedMessage = String(`The party will be here: ${location}! `); //before processing
const encodedMessage = String(''); // after processing



// Question 3
// determine which variables should be determined with let and which with const

encodedMessage; // should be const to prevent mutation before it is decoded
alphabet; // should be const; the alphabet should not change
lengthOfAlphabet; // should be const; if alphabet doesn't change, the length of the alphabet is fixed
shiftValue; // should be const; the shift value should not normally change during encoding/decoding

// Question 4
// given variable `shiftValue` write code to determine if its value is an integer

// Use Number.isInteger() method
// Return true if it is an integer, false otherwise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

shiftValue = 42; // Example value
let isInteger = Number.isInteger(shiftValue);
console.log(`shiftValue: ${shiftValue}, isInteger: ${isInteger}`); // Output: true or false based on the value of shiftValue

shiftValue = 'abc'; // Example string
isInteger = Number.isInteger(shiftValue);
console.log(`shiftValue: ${shiftValue}, isInteger: ${isInteger}`);

shiftValue = '007'; // Example string containing integer
isInteger = Number.isInteger(shiftValue);
console.log(`shiftValue: ${shiftValue}, isInteger: ${isInteger}`);