const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const clearBtn = document.getElementById('clear');
const itemList = document.getElementById('item-list');
const filterItem = document.getElementById('filter');

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((item) => addItemToDOM(item));
  CheckUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please, Enter the item');
    return;
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  CheckUI();

  itemInput.value = '';
}

function addItemToDOM(item) {
  const newItem = document.createElement('li');
  newItem.textContent = item;

  const button = newButton('remove-item btn-link text-red');

  newItem.appendChild(button);
  itemList.appendChild(newItem);
}

function addItemToStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Add new item into array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function RemoveItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  CheckUI();
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  CheckUI();
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();

  const items = itemList.querySelectorAll('li');

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    itemName.indexOf(text) === -1
      ? (item.style.display = 'none')
      : (item.style.display = 'flex');
  });
}

function CheckUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    filterItem.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    filterItem.style.display = 'block';
  }
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

// Initialize App
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', RemoveItem);
  clearBtn.addEventListener('click', clearItems);
  filterItem.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  CheckUI();
}

init();
