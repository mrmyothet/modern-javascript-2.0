function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;
  console.log('After the return'); // will not execute
}

const result = subtract(10, 2);
console.log(result, subtract(20, 5));
