// Start with this initial guest directory:

const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

/* 
## Step 1 
Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, 
and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".
*/

// Can use square or bracket notation to add a new property to an object
if (!guests["BRUTUS"]){
    guests['BRUTUS'] = {
        title: "Senator",
        region: "Rome",
        dietaryPreference: "Vegan",
        pastGifts: ["Silver Dagger", "Marble Bust"]
    };
}



/*
## Step 2 
Update CICERO's past gifts to include a "Golden Lyre".
*/

// pastGifts is an array, so we can use the push method to add a new gift
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

guests.CICERO.pastGifts.push("Golden Lyre");

/*
## Step 3 
Retrieve the region of "ANTONY".
*/

// Using dot notation
const regionOfAntony = guests.ANTONY.region;
// Or using bracket notation
const regionOfAntony2 = guests["ANTONY"]["region"]; 


/*
## Step 4 
Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.

### Hint 
- Use the `delete` keyword to remove properties from an object.
*/

// delete keyword removes a property from an object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
delete guests.CICERO;

// or delete guests["CICERO"];


/* 
## Step 5 
Assign ANTONY's profile to a new variable named `generalProfile`. 
Then, using this new variable, change the `region` of ANTONY to "Egypt".
*/


const generalProfile = guests.ANTONY;

// Changing the region using the new variable
// is equivalent to guests.ANTONY.region = "Egypt";
generalProfile.region = "Egypt";

/* 
## Question 1 
After executing Step 5, what will be the region of ANTONY in the original `guests` object?
*/

// The region of ANTONY in the original guests object will be "Egypt".
// This is because objects in JavaScript are assigned by reference.
// the `generalProfile` variable points to the same reference (object in memory) as `guests.ANTONY`.
// Any changes made to `generalProfile` will also reflect in `guests.ANTONY`.

/*
If you wanted to create a separate copy of ANTONY's profile so that changes to the new variable do not affect the original `guests` object
## Question 2 You can create a shallow copy of ANTONY's profile using the spread operator
*/

const separateProfile = { ...guests.ANTONY };


