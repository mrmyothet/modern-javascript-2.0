// Add event to each individual items

// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// Event Delegation
// Use Parent
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  //   console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
