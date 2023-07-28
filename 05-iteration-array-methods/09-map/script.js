const companies = [
  { name: 'Samsung', category: 'Tech', age: 10, employee: 100, start: 2000, end: 2019 },
  { name: 'Tesla', category: 'Auto', age: 30, employee: 1000, start: 1990, end: 2000 },
];

// const newComp = companies.map(elem => ({
//   name: elem.name,
//   category: elem.category,
// }));

// console.log(newComp);

const employeeComp = companies.map(elem => {
  return {
    name: elem.name,
    length: elem.end - elem.start + ' years',
  };
});

console.log(employeeComp);

const arr1 = [1, 2, 3, 4, 5, 6, 7];

// const newArray = arr1
//   .map(elem => Math.sqrt(elem))
//   .map(sqrt => sqrt * 2)
//   .map(sqrtTriple => sqrtTriple * 3);

const newArray = arr1.filter(elem => elem % 2 === 0).map(el => el * el);

console.log(newArray);
