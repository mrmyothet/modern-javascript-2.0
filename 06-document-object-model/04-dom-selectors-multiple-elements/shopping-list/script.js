// querySelectorAll

const listItems = document.querySelectorAll('li'); // NodeList

console.log(listItems[1].innerText);

// listItems.style.color = 'red';
// cannot set style on node list

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   //   if (index === 0) {
//   //     item.innerText = 'Oranges';
//   //   }
//   // will remove delete buttton, because list item have text and button

//   if (index === 0) {
//     item.innerHTML = `Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

console.log(listItems); // NodeList

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // HTMLCollection
console.log(listItems2[2].innerText);

// cannot forEach on HTMLCollection

// listItems2.forEach((item) => {
//   console.log(item.innerText);
// });

// caught TypeError: listItems2.forEach is not a function

const listItemArray = Array.from(listItems2);
listItemArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // HTMLCollection
console.log(listItems3[0].innerText);
