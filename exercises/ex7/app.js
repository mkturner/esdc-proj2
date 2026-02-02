/* 
You are given the below code.
Your objective is to encrypt the name "BRUTUS" using the Caesar Cipher technique and loops. 
*/

const friend = "BRUTUS"
const shiftValue = 3;

/* 
## Step 1 
Recall the Latin alphabet variable from the previous exercise.
*/

// initialize a variable to hold the latin alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

/*

## Step 2 
Use a loop to iterate through each letter of "BRUTUS". 
Employ the Caesar Cipher technique to shift each letter by the given value. 
Store the encrypted name in a variable.

### Hints
- Use a `for` loop to traverse each letter of the name.
- Remember to handle cases where the shift might go beyond "z".
*/

function caesarCipher(name, shift) {
    // declare a variable that will collect encrypted letters as they are encoded
    let encryptedName = "";

    // loop through each letter of the name
    // for of to loop through each letter of iterable without needing an index
    for (let letter of name) {
        // if char is in alphabet
        // !== because -1 means not found; not necessary because -1 is falsy
        if (alphabet.indexOf(letter.toLowerCase()) !== -1) {
            // find the index of the current letter
            const currentIndex = alphabet.indexOf(letter.toLowerCase());
            // calculate the new index with the shift, wrapping around using modulo
            const encryptedIndex = (currentIndex + shift) % alphabet.length;
            const encryptedLetter = alphabet[encryptedIndex];
            // append the encrypted letter to the result string
            // maintain original case
            encryptedName += encryptedLetter.toUpperCase();
        }
    }
    return encryptedName;
}

// call the function to encrypt friend's name, and print the result
brutusEncrypted = caesarCipher(friend, shiftValue); 
console.log(`With a shift value of ${shiftValue}, ${friend} would be encrypted as: ${brutusEncrypted}`);




/*
## Question 1
What advantage does using a loop provide over manually encrypting each letter?

A loop allows the the encryption process to be automated while abstracting away repetitive code.
Also, the loop will handle names with any length. This will make the code more flexible.
Lastly, using for/of ensures letters are processed in order, without having to manually track indices.
*/

/*
## Question 2
Explain the role of `% alphabet.length` in our loop. How does it aid in the encryption process?

Taking mmodulo with alphabet.length ensures that when the shift pushes the index beyond either bound of the alphabet, 
it wraps around to the opposite end. This allows letters like 'z' to be correctly encoded with positive values, 
or 'a' to be correctly encoded with negative values.
*/