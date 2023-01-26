function analyzeArray (arr) {
  /** Function return object with average, min, max and length value of array
   * @param {Array} arr Array of numbers
   * @return {Object}   Object with analyzed data
   */
  if (Array.isArray(arr)) {
    if (onlyNumbers(arr)) {
      return {
        average: arr.reduce((sum, num) => sum += Number(num), 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
      }
    } else {
      throwError();
    }
  } else {
    throwError();
  }

}
function onlyNumbers(arr) {
  return arr.every(num => {
    return Number(num);
  });
}

function throwError() {
  throw new Error("Function expect array as parameter!");
}

export default analyzeArray;