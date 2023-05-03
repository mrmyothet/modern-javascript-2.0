// function add(a, b) {
//   return a + b;
// }

// fat arrow =>
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// can leave off () when a single param
const double = (a) => a * 2;

// Returning an object - put () before {}
const createObj = () => ({
  name: 'Brad',
  age: 38,
});

const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (n) {
//   console.log(n);
// });

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
