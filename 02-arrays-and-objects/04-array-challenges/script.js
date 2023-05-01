// Challenge 1
const arr = [1, 2, 3, 4, 5];
// Expected Result: [6, 5, 4, 3, 2, 1, 0]

arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(arr);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
// Expected Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// have to get rid of extra 5

// Solution 1
// const arr3 = arr1.concat(arr2.splice(1));

// Solution 2
// const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 3
const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);
