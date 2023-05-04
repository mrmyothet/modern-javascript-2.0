/*

for([initialExpression]; [conditionExpression];[incrementExpression])
{
  statements
}

- initialExpression - Initialize a variable/counter
- conditionExpression - Condition that the loop will continue to run as long as it is met or until the condition is false
- incrementExpression - Expression that will be executed after each iteration of the loop. Usually increments the variable 
- statements - code that will be executed each time the loop is run. 

*/

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number.');
  } else {
    console.log('Number ', i);
  }
}

// Nested Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ', i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i], 'is the best');
  } else {
    console.log(names[i]);
  }
}
