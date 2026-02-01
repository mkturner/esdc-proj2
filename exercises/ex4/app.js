// Given starter code
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

/* ## Step 1 

 - If `emblemClue1` is "Eagle", the location starts with "Forum".
 - If `emblemClue1` is "Lion", the location starts with "Colosseum".
 - Otherwise, the location starts with "Villa". 
*/

let location = '';

// ES6 String Interpolation
if (emblemClue1 === 'Eagle') {
    location = `Forum${location}`;
} else if (emblemClue1 === 'Lion') {
    location = `Colosseum${location}`;
} else {
    location = `Villa${location}`
}

/* 
    ## Step 2 🧩

Use boolean logic to decipher the second clue.

- If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
- If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

*/
// OLD ES5 String.concat()
// joins different arguments in order
if (emblemClue2 === "Laurel" && location === 'Forum') {
    location = location.concat(' ', 'of Augustus')
} else if (emblemClue2 === "Grapes" || location === 'Villa') {
    location = location.concat(' ', 'of Pompey')
}

/* 
    ## Step 3 🧩

Use the switch statement to decipher the third clue.

- Depending on the value of `emblemClue3`, append a direction to the location.
    - 7 is "North"
    - 3 is "South"
    - 9 is "East"
    - 4 is "West"
*/

switch (emblemClue3){
    // OLD ES5 Array.join()
    // joins different elements of array using argument to .join() as delimiter
    case 7: [location,"North"].join(' ') //?
    case 3: [location,"South"].join(' ') 
    case 9: [location,"East"].join(' ')
    case 4: [location,"West"].join(' ')
}


// Why is it important to be careful when using == instead of === in conditionals?
 /*
    `==` will perform conversion on operands of different types, for example, if either
    operand is `true`, convert the value to `1` and try the comparison again. Such that
    
    true == 1 => true

    In the case of `===` if the operands are not of the same type, they are automatically 
    not equal.

    true === 1 => false
 */