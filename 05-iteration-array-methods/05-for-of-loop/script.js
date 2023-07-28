const names = ['Vally', 'Andrew', 'Stiven'];
const myArray = [
  { name: 'Vika', age: 21 },
  { name: 'Vally', age: 150 },
];

// for (const item of myArray) {
//   console.log(item.name);
// }

myArray.forEach(item => console.log(item.name));

const sentence = 'Nice!';

for (const letter of sentence) {
  console.log(letter);
}

const obj = { name: 'AA', age: 100 };

for (const key in obj) {
  console.log(key);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
