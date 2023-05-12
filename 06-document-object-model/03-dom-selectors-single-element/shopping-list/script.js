// Select Element

let output;
output = document.getElementById('app-title');
output = document.getElementById('app-title').id;
output = document.getElementById('app-title').className;

output = document.getElementById('app-title').getAttribute('id');

// Set attributes

// document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class', 'title');

const appTitle = document.getElementById('app-title');
appTitle.title = 'Shopping List';
appTitle.setAttribute('class', 'title');
appTitle.textContent = 'Hello World';
appTitle.innerText = 'Hello Again';
appTitle.innerHTML = '<strong>Shopping List</strong>';

// Change Styles

appTitle.style.color = 'red';
appTitle.style.backgroundColor = 'black';
appTitle.style.padding = '10px';
appTitle.style.borderRadius = '10px';

// document.querySelector
output = document.querySelector('h1');
output = document.querySelectorAll('h1');
output = document.querySelector('#app-title');
output = document.querySelector('.container');
output = document.querySelector('input[type=text]');

secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
// other than the document

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
