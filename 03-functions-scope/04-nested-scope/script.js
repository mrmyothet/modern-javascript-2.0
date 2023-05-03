// nested functions related with closure

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();

  // console.log(y); // caught ReferenceError: y is not defined
}

first();

// Nested Block
if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y); // caught ReferenceError: y is not defined
}
