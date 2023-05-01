// Nested Array - put array inside array
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
// fruits.push(berries);
// console.log(fruits);    // (4) ['apple', 'pear', 'orange', Array(3)]

let x;
// x = fruits[3];      // (3) ['strawberry', 'blueberry', 'rasberry']
// x = fruits[3][1];   // blueberry

const allFruits = [fruits, berries];
x = allFruits[1][0]; // strawberry

// Concat - add items from an array into different array
x = fruits.concat(berries); // (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']

// Spread Operator (...)
x = [...fruits, berries]; // (4) ['apple', 'pear', 'orange', Array(3)]
x = [...fruits, ...berries]; // (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']
// console.log(x);

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8]; // nested array
// (6) [1, 2, Array(2), 5, Array(2), 8]
x = arr.flat();
// (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Static Methods on Array Object
x = Array.isArray(fruits); // true
x = Array.isArray('Hello'); // false

// useful for html collections or node list
x = Array.from('12345'); // (5) ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); //  (3) [1, 2, 3]

console.log(x);
