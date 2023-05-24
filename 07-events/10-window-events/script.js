// document.querySelector('h1').textContent = 'Hello World';
// Uncaught TypeError: Cannot set properties of null (setting 'textContent')

// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

// entire page is loaded including images
window.addEventListener('load', () => {
  //   document.querySelector('h1').textContent = 'Hello World';
  console.log('Page Loaded');
});

// DOM tree is ready
window.addEventListener('DOMContentLoaded', () => {
  //   document.querySelector('h1').textContent = 'Hello World';
  console.log('DOM Loaded');
});

console.log('Run me');

// defer attribute in script tag

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).textContent = `Resize to : ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
