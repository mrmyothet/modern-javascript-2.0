const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

let x;

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane';
person['isAdmin'] = false;

delete person.age;
person.hasChildern = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

x = person;
person.greet();
console.log(x);
