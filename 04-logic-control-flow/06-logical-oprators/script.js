// && - need to all true
console.log(10 > 20 && 30 > 15);

// || - one of them has to be true
console.log(10 > 20 || 30 > 15);

// && - return first falsy value or the last value

let a;

a = 10 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = 10 && 0 && 30;
console.log(a);

a = 10 && '' && 0 && 30;
console.log(a);

// const posts = ['Post One', 'Post Two'];
const posts = [];

console.log(posts[0]); // undfined
posts.length > 0 && console.log(posts[0]);

// || - return the first truthy value or the last value
let b;
b = 10 || 20;
console.log(b);

b = 0 || 20;
console.log(b);

b = 0 || null || '' || undefined;
console.log(b);

// ?? return the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
console.log(c);

c = null ?? 20;
console.log(c);

c = undefined ?? 30;
console.log(c);

c = 0 ?? 30;
console.log(c);

c = '' ?? 30;
console.log(c);
