// console.log(window);
// console.log(window.document);
// console.log(window.document.body);
// console.log(window.document.body.innerHTML);

// console.log(document.links); // HTMLCollection - like array
// console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World</h1>';

// Methods on document object
// document.write('Hello from JS');

const main = document.getElementById('main');
console.log(main);
main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';
