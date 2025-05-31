function findMaxNumber(numbers) {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > number) number = numbers[i];
  }
  return number;
}

module.exports = findMaxNumber;
