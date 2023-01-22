import reverseString from "./reverseString";

// test where string only have letters
test('reversed string - test => tset', () => {
  expect(reverseString("test")).toMatch(/tset/);
});

test('reversed string - Hello world => dlrow olleH', () => {
  expect(reverseString("Hello world")).toMatch(/dlrow olleH/);
});

// test with string with numbers
test('reversed string - H3ll0 w0r1d => d1r0w 0ll3H', () => {
  expect(reverseString("H3ll0 w0r1d")).toMatch(/d1r0w 0ll3H/);
});

// if string is empty
test('empty string', () => {
  expect(() => reverseString("")).toThrowError("Can't uppercase empty string");
});

// wrong data format
// if wrong format (not string) is passed
test('wrong format - passed number', () => {
  expect(() => reverseString(12345)).toThrowError("Function expect string, but got number");
});
test('wrong format - passed boolean', () => {
  expect(() => reverseString(true)).toThrowError("Function expect string, but got boolean");
});
test('wrong format - passed array', () => {
  expect(() => reverseString(["t","e","s","t"])).toThrowError("Function expect string, but got array");
});
test('wrong format - passed object', () => {
  expect(() => reverseString({test:"test"})).toThrowError("Function expect string, but got object");
});