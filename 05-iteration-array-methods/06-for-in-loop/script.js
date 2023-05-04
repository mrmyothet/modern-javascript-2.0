// Loop through objects

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// Loop through array
const colorArr = ['red', 'blue', 'orange', 'green'];
for (const index in colorArr) {
  console.log(index, colorArr[index]);
}
