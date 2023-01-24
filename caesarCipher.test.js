import caesarCipher from "./caesarCipher";

test('caesarCipher - lowercase', () => {
  expect(caesarCipher("test", 2)).toMatch(/vguv/);
});

test('caesarCipher - uppercase', () => {
  expect(caesarCipher("TEST", 2)).toMatch(/VGUV/);
});

test('caesarCipher - mix', () => {
  expect(caesarCipher("Test", 2)).toMatch(/Vguv/);
});

test('caesarCipher - punctuation', () => {
  expect(caesarCipher("TEST!", 2)).toMatch(/VGUV!/);
});


test('caesarCipher - make array start from beggining - lowercase', () => {
  expect(caesarCipher("test", 7)).toMatch(/alza/);
});

test('caesarCipher - make array start from beggining - uppercase', () => {
  expect(caesarCipher("TEST", 7)).toMatch(/ALZA/);
});

test('caesarCipher - make array start from beggining - mix', () => {
  expect(caesarCipher("Test", 7)).toMatch(/Alza/);
});

test('caesarCipher - invalid first param', () => {
  expect(() => caesarCipher(2, 7)).toThrowError("Invalid parameter type!")
});

test('caesarCipher - invalid second param', () => {
  expect(() => caesarCipher("Test", "test")).toThrowError("Invalid parameter type!")
});

test('caesarCipher - invalid both param', () => {
  expect(() => caesarCipher(2, "test")).toThrowError("Invalid parameter type!")
});

test('caesarCipher - second param is string with number', () => {
  expect(caesarCipher("Test!", 7)).toMatch(/Alza!/);
});
