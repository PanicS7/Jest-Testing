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

// if wrong format (not number) is passed
test('wrong format - add', () => {
  expect(() => calculator.add("test1", "test2")).toThrowError("Function expect number, but got wrong value type!");
});
test('wrong format - subtract', () => {
  expect(() => calculator.subtract("test1", "test2")).toThrowError("Function expect number, but got wrong value type!");
});
test('wrong format - divide', () => {
  expect(() => calculator.divide("test1", "test2")).toThrowError("Function expect number, but got wrong value type!");
});
test('wrong format - multiply', () => {
  expect(() => calculator.multiply("test1", "test2")).toThrowError("Function expect number, but got wrong value type!");
});

// if wrong format (not number) is passed as one of values
test('some value is wrong format - add', () => {
  expect(() => calculator.add("3", "test2")).toThrowError("Function expect number, but got wrong value type!");
});
test('some value is wrong format - subtract', () => {
  expect(() => calculator.subtract("test1", "2")).toThrowError("Function expect number, but got wrong value type!");
});
test('some value is wrong format - divide', () => {
  expect(() => calculator.divide("5", "test2")).toThrowError("Function expect number, but got wrong value type!");
});
test('some value is wrong format - multiply', () => {
  expect(() => calculator.multiply("test1", "2")).toThrowError("Function expect number, but got wrong value type!");
});

// if string with just numbers are passed
test('numbers in string format - add', () => {
  expect(calculator.add("1", "2")).toBe(3);
});
test('numbers in string format - subtract', () => {
  expect(calculator.subtract("3", "2")).toBe(1);
});
test('numbers in string format - divide', () => {
  expect(calculator.divide("9", "3")).toBe(3);
});
test('numbers in string format - multiply', () => {
  expect(calculator.multiply("3", "3")).toBe(9);
});