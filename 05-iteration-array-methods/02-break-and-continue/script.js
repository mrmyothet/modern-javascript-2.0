// Break

for (let i = 0; i <= 20; i++) {
  console.log(i);

  if (i === 15) {
    console.log('Breaking....');
    break;
  }
}

// Continue - skip and continue next iteration

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13...');
    continue;
  }
  console.log(i);
}
