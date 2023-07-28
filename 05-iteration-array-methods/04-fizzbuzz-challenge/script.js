for (let i = 1; i <= 100; i++) {
  // for (let j = 1; j <= i; j++) {
  //console.log(`${i} * ${j} = ${i * j}`);

  if (i % 15 === 0) {
    console.log('fizzBuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }
  // }
}
