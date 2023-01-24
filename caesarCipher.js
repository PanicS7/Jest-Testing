function caesarCipher(str, shiftFactor) {
  /**
   * @param  {String} str         String to be shifted
   * @param  {Number} shiftFactor Shift factor
   * @return {String}             Shifted string
   */
  // alphabet
  let lowerCaseData = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseData = lowerCaseData.map(letter => letter.toUpperCase());

  if (validParam(str, shiftFactor)) {
    // take letters from string
    let strLetters = [...str];
    // final string
    let caesarStr = strLetters.map(letter => {
      // check lowercase letters
      if (lowerCaseData.includes(letter)) {
        return shiftLetter(lowerCaseData, letter, Number(shiftFactor));
      } // check uppercase letters
      else if (upperCaseData.includes(letter)) { 
        return shiftLetter(upperCaseData, letter, Number(shiftFactor));
      } // check other characters
      else {
        return letter;
      }
    })

    return caesarStr.join("");
  }
}

function shiftLetter(data, letter, shiftFactor) {
  // find index of letter in data
  let index = data.indexOf(letter);
  // check if index is greater then or equal length of data
  let indexShiftFactor = shiftFactor + index;
  if (indexShiftFactor >= data.length) {
    // if so start from beggining
    indexShiftFactor = indexShiftFactor - data.length;
  }
  return data[indexShiftFactor];
}

function validParam(param1, param2) {
  if (typeof param1 === "string" && !isNaN(param2)) {
    return true;
  } else {
    throw new Error("Invalid parameter type!");
  }
}

export default caesarCipher;