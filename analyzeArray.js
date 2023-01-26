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
    } 
  } 

  throw new Error("Function expect array as parameter!");

}

function onlyNumbers(arr) {
  return arr.every(num => {
    return !isNaN(num);
  });
}

export default analyzeArray;