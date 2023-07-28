const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = () => {
  let prev = 0;

  for (let cur of arr) {
    prev += cur;
  }

  return prev;
};

console.log(sum());

//

const cart = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 50 },
];

const total = cart.reduce((prev, element) => prev + element.price, 0);

console.log(total);
