// anything inside a string - truthy
// const email = 'test@test.com';

// if (email) {
//   console.log('You passed in an email');
// }
// console.log(Boolean(email)); // true

/* Falsy Values: 

- false
- 0
- "" or '' (Empty string)
- null
- undefined 
- NaN

*/

/*  Truthy Values:

- Everything else that is not falsy 
- true 
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function(){} (empty function)

*/

const x = 6;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and Falsy caveats
const children = 0;
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

if (children !== undefined || !isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
// const posts = ['Post One', 'Post Two'];
const posts = [];
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts to list');
}

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts to list');
}

// // Checking for empty objects
// const user = {
//   name: 'Brad',
// };

const user = {};

if (user) {
  console.log('List users');
} else {
  console.log('No User');
}

if (Object.keys(user).length > 0) {
  console.log('List users');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
