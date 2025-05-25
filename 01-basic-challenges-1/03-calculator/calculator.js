function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}

module.exports = calculator;
