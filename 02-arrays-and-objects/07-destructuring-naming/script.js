const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring - using carly braces - {}
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

// const {
//   id,
//   title,
//   user: { name },
// } = todo;

// console.log(name);

const {
  id: todoId,
  title,
  user: { name },
} = todo;
console.log(todoId);

// Destructure Arrays - use bracket []
const numbers = [23, 67, 33, 49, 52];
// const [first, second] = numbers;
// console.log(first, second); // 23, 67

// the rest operator - same with spread operator
const [first, second, ...nums] = numbers;
console.log(first, second, nums);
