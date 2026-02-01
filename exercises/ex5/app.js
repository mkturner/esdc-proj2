// Given the initial array of guests:
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

/*
## Step 1 
Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.

### Hint 
- There's a method to add elements to the beginning of an array.
*/

// Array.unshift() adds arguments to the front of an array-like object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
guests.unshift("BRUTUS");



/* 
## Question 1: How can you verify that "BRUTUS" was added to the beginning of the array?

    Check the first element of the array using 0 inside the square brackets because arrays are zero-indexed.
*/

/*
## Step 2 
A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.

### Hint 
- There's a method to add elements to the end of an array.
*/

// Array.push() adds arguments to the end of an array object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

guests.push("AUGUSTUS", "LUCIA");


/*
## Step 3 
Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.

### Hint 
- Use the right method to find a specific name in the list and its position.
*/

// Array.indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const indexOfSpartacus = guests.indexOf("SPARTACUS");


/*
## Question 2: What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited?

In the scenario where "SPARTACUS" wasn't invited, (and not added to the list) the `indexOf` function would return `-1` 
for the "SPARTACUS" element. This means it was not found by the indexOf method.
*/



/*
## Step 4 
Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.

### Hint 
Find the index of the guest and use the appropriate method to remove him from the list.
*/

// Use Array.splice() to remove elements. Takes 3 arguments. Only 1 is mandatory
// 1: Starting position to splice from
// 2: Number of items to remove. If empty, removes from start position to the end of the array.
// 3: List of new items to add starting from start position. If empty, items will only be removed
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const indexOfCassius = guests.indexOf("CASSIUS");
guests.splice(indexOfCassius, 1);



/*
## Step 5 
Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.

### Hint 
- Use the appropriate method to get a portion of the array.
*/

// Use Array.slice() to return a portion of an array as a new array. The Old array will not be modified
// takes 2 arguments, start index (inclusive) and end index (exclusive)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const specialInvites = guests.slice(0, 3); //? 


/*
## Step 6 
Caesar decides he wants the guest list in alphabetical order. Sort the array. 
However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. 
Can you think of a way to sort the guests but keep the honored ones at the top?
*/

// Remove first name, but safely store it in a variable for later
// splice returns all elements removed 
const honoredGuest = guests.splice(0,1); //?

// sort the rest of the list then add the honored guest to the front
const finalGuestList = honoredGuest.concat(guests.sort()) //?