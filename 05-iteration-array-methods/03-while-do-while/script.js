// for - know the number of loops
// while - don'k know the number of loops

let i = 0;
while (i <= 20) {
  console.log('Number', i);
  i++;
}

i = 0;
// Loop over arrays
const arr = [10, 20, 30, 40];
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
i = 1;
while (i <= 5) {
  console.log('Number', i);
  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// do while - run the loop at least once
i = 21;
do {
  console.log('Number', i);
  i++;
} while (i <= 20);
