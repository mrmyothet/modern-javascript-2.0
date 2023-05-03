// hoisting - move function declarations to the top
// but not for function expressions
console.log(addDollarSign(100));

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addPlusSign(200));
// caught ReferenceError: Cannot access 'addPlusSign' before initialization

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(200));
