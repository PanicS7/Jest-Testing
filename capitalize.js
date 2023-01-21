function capitalzie(str) {
  /**
 * Capitalize first character
 * @param  {String} str String to be capitalized
 * @return {String}     Capitalizad first letter of string
 */

  if (typeof str === "string" && str != "") {
    let strCopy = [...str];
    let firstLetter = strCopy.shift();
    strCopy.unshift(firstLetter.toUpperCase());

    return strCopy.join("");
  } else {
    if (str === "") {
      throw new Error("Can't uppercase empty string");
    } else {
      // In case wrong data format is passed
      let stringType = typeof str;
      if (stringType === "object") {
        if (Array.isArray(str)) {
          stringType = "array";
        }
      }
      throw new Error(`Function expect string, but got ${stringType}`);
    }
  }
  
}

export default capitalzie;