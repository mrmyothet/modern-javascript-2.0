const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const clearBtn = document.getElementById('clear');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  if (itemInput.value === '') {
    alert('Please, Enter the item');
    return;
  }

  const newItem = document.createElement('li');
  newItem.textContent = itemInput.value;

  const button = newButton('remove-item btn-link text-red');

  newItem.appendChild(button);
  itemList.appendChild(newItem);

  itemInput.value = '';
}

function newButton(classList) {
  const button = document.createElement('button');
  button.className = classList;
  const icon = newIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function newIcon(classList) {
  const icon = document.createElement('i');
  icon.className = classList;
  return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
