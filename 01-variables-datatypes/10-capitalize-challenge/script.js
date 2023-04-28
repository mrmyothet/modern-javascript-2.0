const myString = 'developer';
// const firstLetter = myString[0].toUpperCase();
// const remainingLetters = myString.substring(1);
// const myNewString = firstLetter + remainingLetters;

const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);