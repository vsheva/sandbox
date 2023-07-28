const library = [
  { title: 'School1', author: 'Author1', status: { own: true, reading: false, read: false } },
  { title: 'School2', author: 'Author2', status: { own: true, reading: false, read: false } },
  { title: 'School3', author: 'Author3', status: { own: true, reading: false, read: false } },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

let { title: firstSchool } = library[0];
console.log(firstSchool);

const lib = JSON.stringify(library);
console.log(lib);

//library.map(el => (el.status.read = true));
