// 1. html - inline event listener - not recommended
// onclick=OnClear()

// function onClear() {
//   const itemList = document.querySelector('ul');
//   // itemList.innerHTML = '';

//   const items = itemList.querySelectorAll('li');
//   items.forEach((item) => item.remove());
// }

// 2. Javascript Event Listener

// const clearBtn = document.querySelector('#clear');
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items - second onclick event');
// };

// 3. addEventListener () - Recommend
const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });

// clearBtn.addEventListener('click', function () {
//   console.log('Clear Items second addEventListener');
// });

function onClear() {
  const itemList = document.querySelector('ul');
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

clearBtn.addEventListener('click', onClear);

// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear);
// }, 5000);

// Fire an event from script
// setTimeout(() => clearBtn.click(), 5000);
