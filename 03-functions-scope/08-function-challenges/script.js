// Challenge 1

const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(getCelsius(32));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
console.log(`The temperature is ${getCelsius(50)} \xB0C`);

// Challenge 2
// const minMax = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr),
// });
// console.log(minMax([1, 2, 3, 4, 5]));

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}
console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (length = 10, width = 5) {
  const area = length * width;
  const output = `The area of a rectange with a length of ${length} and a width of ${width} is ${area}`;
  console.log(output);
})(10, 5);
