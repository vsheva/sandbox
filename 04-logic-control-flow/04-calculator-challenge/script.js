const calculator = function (num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '/':
      result = num1 / num2;
      break;

    case '*':
      result = num1 * num2;
      break;

      default:
      result =  "Write valid operator";
  }
  return result;
};

console.log(calculator(10, 5, 'j'));


