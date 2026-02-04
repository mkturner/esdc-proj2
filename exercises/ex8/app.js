// Exercise 8 Solution

// starter code
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/* 
## Step 1 
Create a function named `encryptLetter` that takes a letter and a shift value as parameters. 
This function should return the encrypted version of the letter.
*/

/*
### Hint 
- Inside the function, find the index of the letter in the alphabet.
- Add the shift value to this index.
- Use the modulus operator to ensure wrapping around the alphabet if necessary.
- Return the encrypted letter.
*/

function encryptLetter (letter, shift) {
    // declare a variable to hold the encrypted letter to return later
    let encryptedLetter = '';

    if (alphabet.indexOf(letter.toLowerCase()) !== -1) {
        // find the index of the current letter
        const currentIndex = alphabet.indexOf(letter.toLowerCase());
        // calculate the new index with the shift, wrapping around using modulo
        const encryptedIndex = (currentIndex + shift) % alphabet.length;
        encryptedLetter = alphabet[encryptedIndex];
    }
    return encryptedLetter.toUpperCase();
}

/*
## Step 2 
Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

### Hint 
- Use a loop to iterate over each letter in the word.
- For each letter, call the `encryptLetter` function.
- Construct the encrypted message.
- Return the encrypted message.
*/

function encryptMessage (word, shift){
    let encryptedMessage = "";
    for (letter of word) {
        encryptedMessage += encryptLetter(letter, shift);
    }
    return encryptedMessage;
}

const secret =encryptMessage(friend, shiftValue); //?




/*
## Step 3 
Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.


### Hint 
- Inside the function, find the index of the letter in the alphabet.
- Subtract the shift value from this index.
- Use the modulus operator to ensure wrapping around the alphabet if necessary. Remember to handle negative values correctly.
- Return the decrypted letter.
*/

function decryptLetter (letter, shift) {
    // declare a variable to hold the decrypted letter to return later
    let decryptedLetter = '';

    if (alphabet.indexOf(letter.toLowerCase()) !== -1) {
        // find the index of the current letter
        const currentIndex = alphabet.indexOf(letter.toLowerCase());
        // calculate the new index with the shift, wrapping around using modulo
        const decryptedIndex = (currentIndex - shift) % alphabet.length;
        decryptedLetter = alphabet[decryptedIndex];
    }
    return decryptedLetter.toUpperCase();
}

/*
### Answer 
```jsx
function decryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}
```
*/

/*
## Step 4 
Create a function named `decryptMessage` that takes an encrypted word and a shift value as parameters. 
This function should return the decrypted version of the entire word.

### Hint 
- Use a loop to iterate over each letter in the word.
- For each letter, call the `decryptLetter` function.
- Construct the decrypted message.
- Return the decrypted message.
*/

function decryptMessage (word, shift) {
    let decryptedMessage = "";
    for (let letter of word) {
        // call function to process each letter
        // then add the result to decryptedMessage
        decryptedMessage += decryptLetter(letter, shift);
    }
    // return the full decrypted message
    return decryptedMessage;
}

const decryptedSecret = decryptMessage(secret, shiftValue); //?

/*
## Question 
If Caesar encrypts the word "BRUTUS" using our `encryptMessage` function 
and then decrypts the result using our `decryptMessage` function, 
will he get "BRUTUS" back? Why or why not?

Yes Caesar should get 'BRUTUS' back because the decryption process only reverses 
the same encryption processes that were used to encrypt.
*/
