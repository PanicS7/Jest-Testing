import calculator from "./calculator";

test('add', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtract', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('divide', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('divide by 0', () => {
  expect(() => calculator.divide(9, 0)).toThrowError("Cannot divide by 0");
});

test('multiply', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});