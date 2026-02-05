
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  // Your encryption code here
  // - Use shiftValue (may be >26)
  // - Preserve uppercase / lowercase
  // - Leave non-alphabet characters unchanged
  // - After every two characters in the encrypted string, insert a random letter from alphabet
  
  // Handle shiftValue > 26 by reducing it modulo 26
  // 26 is length of alphabet  
  const shiftValueMod = shiftValue % 26;
  // declare variable to hold encrypted message
  let encryptedMessage = "";

  // Loop through each character in the message
  for ( let char of message ) {
    // determine if char is in alphabet using charcode
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // 'a' = 97, 'z' = 122, 'A' = 65, 'Z' = 90
    const charCode = char.charCodeAt(0);

    // Convert Alphabetic characters, preserving case; non-alphabetic characters pass through unchanged
    // uppercase letters
    if ( charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ) {
        // bookmark the base char code for uppercase letters to add back later
        let base = "A".charCodeAt(0);
        // manipulate char code to shift within alphabet range
        let shifted = ((charCode - base + shiftValue) % 26) + base;
        // use String.fromCharCode to convert back to character
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
        let newChar = String.fromCharCode(shifted);

        // append encrypted char to message that will be passed back
        encryptedMessage += newChar;
    } else if ( charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0) ) {
         // bookmark the base char code for lowercase letters
        let base = "a".charCodeAt(0);
        let shifted = ((charCode - base + shiftValue) % 26) + base;
        let newChar = String.fromCharCode(shifted);

        encryptedMessage += newChar;
    } else {
        // non-alphabet character, pass through unchanged
        encryptedMessage += char;
    }
  }
  // TODO: implement
  return encryptedMessage;
}
// Test cases
encrypt("Hello, World!", 3); //?
encrypt("BRUTUS", 3); //?
addRandomLetters(encrypt("BRUTUS", 3)); //?

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  // - Remove the random letters inserted after every two characters
  // - Shift characters back by shiftValue to retrieve original text

  // Handle shiftValue > 26 by reducing it modulo 26
  const shiftValueMod = shiftValue % 26;
  // declare variable to hold decrypted message
  let decryptedMessage = '';

  let temp = removeRandomLetters(encryptedMessage) 
    for ( let char of temp ) {
        const charCode = char.charCodeAt(0);
    
        // Convert Alphabetic characters, preserving case; non-alphabetic characters pass through unchanged
        // uppercase letters
        if ( charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ) {
            let base = "A".charCodeAt(0);
            // subtract base to get letter's index [0-25], 
            // then subtract shiftValue, use modulo to wrap around, then add base back
            // 26 is added to prevent negative numbers that might throw things off
            let unShifted = ((charCode - base - shiftValueMod + 26) % 26) + base;
            let newChar = String.fromCharCode(unShifted);
            decryptedMessage += newChar;
        // lowercase letters
        } else if ( charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0) ) {
            let base = "a".charCodeAt(0);
            let unShifted = ((charCode - base - shiftValueMod + 26) % 26) + base;
            let newChar = String.fromCharCode(unShifted);
            decryptedMessage += newChar;
        } else {
            decryptedMessage += char;
        }
    }
  return decryptedMessage;
}

// Helper function to get a random letter from the alphabet
// DONE
function getRandomLetter() {
  // Math.random() * alphabet.length gives a floating point number between 0 and length of alphabet
  // Math.floor() rounds down to nearest whole number to use as index
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

// Add random letters to obfuscate secret
// DONE
function addRandomLetters(encryptedMessage, frequency = 2) {
    // Insert a random letter after every specified number of characters in the encrypted message

    // Convert string to array for easier manipulation
    // use spread operator to destructure string into array of characters
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const encryptedMessageArray = [...encryptedMessage];
    let obfuscatedMessage = "";

    encryptedMessageArray.forEach((char, index) => {
        // Check if we need to insert a random letter
        if ((index + 1) % frequency === 0) {
            // After every `frequency` characters, insert char then a random letter
            obfuscatedMessage += char + getRandomLetter();
        } else {
            // Or, Just add the character
            obfuscatedMessage += char;
        }
    });

    return obfuscatedMessage;
}


function removeRandomLetters(obfuscatedMessage, frequency = 2) {
    // Remove the random letters inserted after every specified number of characters

    // Convert string to array for easier manipulation
    const obfuscatedMessageArray = [...obfuscatedMessage];
    let cleanedMessage = "";

    // Array..forEach gives us access to both the character and its index, which 
    // perform arithmetic on index to determine when to remove letters
    obfuscatedMessageArray.forEach((char, index) => {
        // Check if this character is a random letter to be removed
        if ((index + 1) % (frequency + 1) !== 0) {
            // If not, add it to the cleaned message
            cleanedMessage += char;
        }
        // If it is, skip it & do nothing

    });

    return cleanedMessage;
}


// Test cases
const processedMessage = addRandomLetters("hello world");
console.log(processedMessage); 
console.log(removeRandomLetters(processedMessage));

const finalSecret = "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!"
console.log(removeRandomLetters(finalSecret));

decrypt(finalSecret, 42); //?
