// ||= assign the right side value only if the left is a falsy value

let a = null;
if (!a) {
  a = 10;
}

a = a || 10;

a ||= 10;

console.log(a);

// &&= assign the right side value only if the left is a truthy value
let b = 20;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= assign the right side value only if the left is null or undefined
let c = null;
if (c == null || c == undfined) {
  c = 20;
}

c = c ?? 20;

c &&= 20;

console.log(c);
