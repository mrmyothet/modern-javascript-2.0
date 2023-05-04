const age = 17;

// Using if statement
if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You cannot vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can voite' : 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//   console.log('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   console.log('Access denied');
//   redirect = '/login';
// }

const redirect = auth
  ? (console.log('Welcome to the dashboard'), '/dashboard')
  : (console.log('Access denied'), '/login');
console.log(redirect);

// shorthand for if statement without else - &&
auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
