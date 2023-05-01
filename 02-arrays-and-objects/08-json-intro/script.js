// api.github.com/users/bardtraversy/repos

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

console.log(post);
// {id: 1, title: 'Post One', body: 'This is the body'}

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str);
// {"id":1,"title":"Post One","body":"This is the body"}

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);
// {id: 1, title: 'Post One', body: 'This is the body'}

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];
const str2 = JSON.stringify(posts);
console.log(str2);
