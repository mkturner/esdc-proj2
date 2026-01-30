// startwer code 
const friend = "BRUTUS";
const shiftValue = 3;

// 1: Store the Latin alphabet in a variable with all letters in lowercase.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 2: Find the index of the first letter of Ceaser's friend. Store it in a variable.
// access the first letter of the string `friend`
const firstLetter = friend[0]

// convert the first letter to lowercase if not already, using built-in method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
const lowerCaseLetter = firstLetter.toLowerCase();

// use a built-in method to find the index of the letter in the alphabet string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
const letterIndex = alphabet.indexOf(lowerCaseLetter); //?


// 1: Why is the value 1 instead of 2?
// The index is zero-indexed. This means that the count starts from 0 and not 1. 


// Add shiftValue to index of the letter to find new number
const shiftedIndex = letterIndex + shiftValue; //?

// 2: If we go beyond the last letter, "z", which operator could help us to wrap around 
// and continue from the beginning of the alphabet?
// the mudulo/modulus operator (%) can be used to wrap around the alphabet
// if we take modulus of 26 (alphabet.length), we will always get a value between 0 and 25, 
// which are valid indices for the alphabet string

// use string length property to get the total number of letters in the alphabet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
const lengthOfAlphabet = alphabet.length; //?

// use cipher technique to shift first letter of friend;s name by given value
// ensure to wrap around if necessary
const encodedIndex = shiftedIndex % lengthOfAlphabet; //?

// Extract first 3 letters from encrypted message using slice method
// assume encrypted message is  'EUXWXV'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
const encryptedString = "EUXWXV";
const firstThreeLetters = encryptedString.slice(0, 3); //?