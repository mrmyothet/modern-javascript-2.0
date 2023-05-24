const form = document.getElementById('item-form');

function onSubmit(e) {
  // console.log('submit');
  e.preventDefault();

  // 1. Form Data Validation
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please, fill in all fields');
    return;
  }

  console.log(item, priority);
}

// FormData and Entries
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const item = formData.get('item');
  const priority = formData.get('priority');
  console.log('item: ', item, 'priority:', priority);

  const entries = formData.entries();
  console.log(entries);

  for (let entry of entries) {
    console.log(entry[0], entry[1]);
  }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
