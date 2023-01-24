const calculator = {
  /**
   * Simple calculator what can add, subtract, divide, multiply
   * @param {Number} num1 First number
   * @param {Number} num2 Second number
   * @returns             Result of operation
   */
  add: (num1, num2) => {
    if (testValue(num1, num2)) {
      return Number(num1) + Number(num2);
    } 
    throw new Error("Function expect number, but got wrong value type!");
  },
  subtract: (num1, num2) => {
    if (testValue(num1, num2)) {
      return Number(num1) - Number(num2);
    } 
    throw new Error("Function expect number, but got wrong value type!");
  },
  divide: (num1, num2) => {
    if (testValue(num1, num2)) {
      if (num2 === 0) {
        throw new Error("Cannot divide by 0");
      }

      return Number(num1) / Number(num2);
    } 
    throw new Error("Function expect number, but got wrong value type!");
  },
  multiply: (num1, num2) => {
    if (testValue(num1, num2)) {
      return Number(num1) * Number(num2);
    } 
    throw new Error("Function expect number, but got wrong value type!");
  }
}

function testValue (value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
      return false;
  }
  
  return true;
}

export default calculator;