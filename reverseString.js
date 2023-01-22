function reverseString(str) {
  /** Function reverse string
   * @param {String} str String to be reversed 
   * @return {String}    Reversed string 
   */
  if (typeof str === "string" && str != "") {
    let copy = [...str];
    return copy.reverse().join("");
  } if (str === "") {
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

export default reverseString;