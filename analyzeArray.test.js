import analyzeArray from "./analyzeArray";

test('analyzeArray - return object', () => {
  expect(typeof analyzeArray([1,8,3,4,2,6]) === 'object').toBe(true);
});
test('analyzeArray - average', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});
test('analyzeArray - min', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});
test('analyzeArray - max', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});
test('analyzeArray - length', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
test('analyzeArray - wrong parameter', () => {
  expect(() => analyzeArray(12)).toThrowError("Function expect array as parameter!");
});
test('analyzeArray - array with numbers as string type', () => {
  expect(analyzeArray(["1",8,"3",4,"2",6]).average).toBe(4);
});
