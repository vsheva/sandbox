const arr = ['one', 'two', 'three'];

// arr.forEach(function (el, index, array) {
//   console.log(`${index} - ${el}`, array);
// });

const run = function (elem) {
  console.log(elem);
};

arr.forEach(run);

const arr1 = [1, 2, 3, 4, 5, 6];

//filter
// const newArray = arr1.filter(el => el % 2 === 0);
// console.log(newArray);

//filter через forEach

// const newArr = [];

// arr1.forEach(el => {
//   if (el % 2 === 0) {
//     newArr.push(el);
//   }
// });

// console.log(newArr);

// const companies = [
//   { name: 'Company 1', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company 2', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company 3', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company 4', category: 'Technology', start: 1989, end: 2010 },
//   { name: 'Company 9', category: 'Retail', start: 1981, end: 2089 },
// ];

// const RetailCompany = companies.filter(elem => elem.category === 'Retail');
// const SomeCompany = companies.filter(elem => elem.start >= 1992 && elem.end < 2011);
// const longCompany = companies.filter(elem => elem.end - elem.start >= 10);
// console.log(RetailCompany);
// console.log(SomeCompany);
// console.log(longCompany);

const array = [
  {
    name: 'Tom',
    age: 24,
  },
  {
    name: 'Alex',
    age: 28,
  },
];

const newArray = array.map(el => {
  return `${el.name} of age ${el.age}`;
});

console.log(newArray);
