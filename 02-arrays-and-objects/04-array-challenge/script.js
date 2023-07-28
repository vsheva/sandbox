// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.push(6);
// const arr2 = arr.unshift(0);
// const arr3 = arr.reverse();
// console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//arr.slice(4, 5);  !!!
const arr3 = arr1.slice(0, 4);
const arr4 = arr3.concat(arr2);

console.log(arr4);

// const arr4 = arr1.splice(0, 4).concat(arr2);
// console.log(arr4);
