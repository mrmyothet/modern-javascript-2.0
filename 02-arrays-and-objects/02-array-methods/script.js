const arr = [34, 55, 95, 20, 15];
arr.push(100);
arr.pop();
arr.unshift(99);
arr.shift();

// arr.reverse();
// (5) [15, 20, 95, 55, 34]

x = arr.includes(20); // true
x = arr.includes(200); // false

x = arr.indexOf(15); // 4
x = arr.indexOf(340); // -1

x = arr.slice(1); // (4) [55, 95, 20, 15]

x = arr.slice(1, 4);
// console.log(x);      // (3) [55, 95, 20]
// console.log(arr);    // (5) [34, 55, 95, 20, 15]

// x = arr.splice(1, 4);   // also changing the array
// console.log(x);         // (4) [55, 95, 20, 15]
// console.log(arr);       // [34]

// x = arr.splice(3, 1);      // (5) [34, 55, 95, 20, 15]
// console.log(x);            // [20]
// console.log(arr);          // (4) [34, 55, 95, 15]

// method chain
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
