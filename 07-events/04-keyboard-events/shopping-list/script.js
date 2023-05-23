const itemInput = document.getElementById('item-input');

function onKeyPress(e) {
  console.log('keypress');
}

function onKeyUp(e) {
  console.log('keyup');
}

function onKeyDown(e) {
  // console.log('keydown');

  // key
  // console.log(e.key);
  // document.querySelector('h1').innerHTML = e.key;
  if (e.key === 'Enter') {
    alert('You pressed Enter');
  }

  // keyCode
  // https://www.toptal.com/developers/keycode/table
  if (e.keyCode === 13) {
    alert('You pressed keyCode:13 - Enter');
  }

  // code
  // console.log(e.code);
  if (e.code == 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Contol: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('you hit shift + k');
  }
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
