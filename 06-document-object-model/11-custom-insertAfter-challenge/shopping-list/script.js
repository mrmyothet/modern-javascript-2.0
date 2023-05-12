function insertAfter(newEl, existingEl) {
  // const parent = existingEl.parentElement;
  // const nextSibling = existingEl.nextSibling;
  // parent.insertBefore(newEl, nextSibling);

  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New Element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);
