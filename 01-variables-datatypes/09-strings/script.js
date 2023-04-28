const name = 'Myo Thet'; 
const age = 37; 
result = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals in ES6
result = `Hello my name is ${name} and I am ${age} years old`;


// String properties and Methods
// string is primitive data type
// but js provide wrapper object when use properties and methods

const s = 'Hello World';
result = s.length;      // 11

// what js do 
const str = new String('Hello World');
result = typeof str;    // object 

// Access value by key - 
result = str[0];    // H

result = s.__proto__;
result = s.toUpperCase();   // HELLO WORLD
result = s.toLowerCase();   // hello world

result = s.charAt(0);       // H 

result = s.indexOf('d');    // 10

result = s.substring(2, 5); // ll0
result = s.substring(7);    // orld - one param - starting index to end 

result = s.slice(-11, -6);  // Hello 

result = '          Hello World '
result = result.trim();

result = s.replace('World', 'Myo'); // Hello Myo

result = s.includes('Hello');   // true 
result = s.includes('Helli');   // false 

console.log(str);           // String {'Hello World'} - object 
result = str.valueOf();     // Hello Worl - primitive string 

result = s.split(' ');     // (2) ['Hello', 'World']
result = s.split('');       // (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']


console.log(result);