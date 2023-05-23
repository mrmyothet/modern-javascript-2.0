const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  // console.log(e.target.value);
  heading.textContent = e.target.value;
}

function onCheck(e) {
  // console.log(e.target.checked);
  const isChecked = e.target.checked;

  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e) {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '2px';
  itemInput.style.outlineColor = 'green';
}

function onBlur(e) {
  console.log('Input is not focus');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
