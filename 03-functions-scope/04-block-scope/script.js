const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); // caught ReferenceError: y is not defined

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// console.log(i);//caught ReferenceError: i is not defined

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(a); // caught ReferenceError: a is not defined
// console.log(b); // caught ReferenceError: b is not defined
console.log(c); // 700

// var is function scope
function run() {
  var d = 100;
  console.log(d);
}
run();
// console.log(d); // caught ReferenceError: d is not defined

const foo = 1;
var bar = 2; //added to the window object
console.log(window.bar);
