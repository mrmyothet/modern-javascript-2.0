// Array Literal
const numbers = [12, 45, 33, 29, 39];
// console.log(numbers);

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
// console.log(fruits);

let x;
x = numbers[0];
x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

const mixed = [12, 'Hello', true, null];

x = numbers.length;

fruits[2] = 'pear';
x = fruits; // (3) ['apple', 'grape', 'pear']
// fruits.length = 2;   // (2) ['apple', 'grape']

fruits[3] = 'strawberry';
// (4) ['apple', 'grape', 'pear', 'strawberry']

fruits[fruits.length] = 'blueberry';
// (5) ['apple', 'grape', 'pear', 'strawberry', 'blueberry']
fruits[fruits.length] = 'peach';
// (6) ['apple', 'grape', 'pear', 'strawberry', 'blueberry', 'peach']

console.log(x);
