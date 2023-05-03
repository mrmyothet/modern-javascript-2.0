// const user = 'John';
// caught SyntaxError: Identifier 'user' has already been declared
// at otherscript.js

// IIFE
(function () {
  const user = 'John';
  console.log(user);

  const hello = () => console.log('Hello from IIFE');

  hello();
})();

// hello();
// caught ReferenceError: hello is not defined

(function (name) {
  console.log('Hello,', name);
})('Shawn');

// Recursion
// IIFE named function

// (function hello(){
//   console.log('Hello');
//   hello();
// })();
