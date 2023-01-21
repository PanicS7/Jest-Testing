import capitalzie from "./capitalize";

// if string have values and values are letters
test('capitalize first letter - test => Test', () => {
  expect(capitalzie("test")).toMatch(/Test/);
});
test('capitalize first letter - test sentence => Test sentence', () => {
  expect(capitalzie("test sentence")).toMatch(/Test sentence/);
});
test('capitalize first letter - heLLo wORld => HeLLo wORld', () => {
  expect(capitalzie("heLLo wORld")).toMatch(/HeLLo wORld/);
});
test('capitalize first letter - heLLo   wORld => HeLLo   wORld', () => {
  expect(capitalzie("heLLo   wORld")).toMatch(/HeLLo   wORld/);
});

// if string is empty
test('empty string', () => {
  expect(() => capitalzie("")).toThrowError("Can't uppercase empty string");
});

// if string have numbers inside string
test('have numbers as string at beggining', () => {
  expect(capitalzie("0hello world")).toMatch(/0hello world/);
});
test('have numbers as string anywhere', () => {
  expect(capitalzie("0hell0 w0rld")).toMatch(/0hell0 w0rld/);
});
test('have numbers as string but not at beggining', () => {
  expect(capitalzie("hell0 w0rld")).toMatch(/Hell0 w0rld/);
});

// if wrong format (not string) is passed
test('wrong format - passed number', () => {
  expect(() => capitalzie(12345)).toThrowError("Function expect string, but got number");
});
test('wrong format - passed boolean', () => {
  expect(() => capitalzie(true)).toThrowError("Function expect string, but got boolean");
});
test('wrong format - passed array', () => {
  expect(() => capitalzie(["t","e","s","t"])).toThrowError("Function expect string, but got array");
});
test('wrong format - passed object', () => {
  expect(() => capitalzie({test:"test"})).toThrowError("Function expect string, but got object");
});