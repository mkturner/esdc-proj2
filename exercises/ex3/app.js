// Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's Math functions.
// Use Math.random()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let randomDecimalNumber = Math.random(); //?

// Determine the desired range of numbers in our space for shift value, which is between 3 and 33.
const range = 33 - 3;
// 1: Why do we add 1 to the difference between 33 and 3?
// 1 is added because random excludes the higher bound but we want to make sure it is included in this case

const inclusiveRange = range + 1;

// adjust the random number from step 1 to fit inside the deired range
const validRandom = randomDecimalNumber * inclusiveRange; //?

// 2: How does multiplying `randomDecimalNumber` and  `inclusiveRange` produce a number within range.
// Math.random() generates a number between 0 and sligghtly less than 1,
// so the highest number that can be produce will be the highest number in the range (Identity property of Multiplication)
// or less.

// round down to a whole number
const truncatedValidRandom = Math.floor(validRandom); //?

// 3: Why use `Math.floor` instead of `Math.round()`?
// Math.round() has the chance to round up, which could send our value out of bounds of the desired range

// adjust the integer to fit within 3 to 33, inclusive
const properValidRandom = truncatedValidRandom + 3 //?

// 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
// Math.floor(randomDecimalNumber * inclusiveRange) will give values from 0 - 30,
// so by adding 3 we can guarantee we hit 3 at the lower end and 33 at the higher end.
