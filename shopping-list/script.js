const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const clearBtn = document.getElementById('clear');
const itemList = document.getElementById('item-list');
const filterItem = document.getElementById('filter');

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
  CheckUI();
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

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', RemoveItem);
clearBtn.addEventListener('click', clearItems);
filterItem.addEventListener('input', filterItems);
// window.addEventListener('DOMContentLoaded', CheckUI);

CheckUI();
