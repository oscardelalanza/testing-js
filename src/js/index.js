const capitalize = string => string[0].toUpperCase() + string.substr(1, string.length);

const reverseString = string => string
  .split('')
  .reverse()
  .join('');

const getChar = (char, key) => {
  let charCode = char.charCodeAt(0) + key;
  if (charCode > 90 && charCode < 97) {
    charCode = 65 + (charCode - 90) - 1;
  }
  if (charCode > 122) {
    charCode = 97 + (charCode - 122) - 1;
  }
  return charCode;
};

const caesar = (string, key) => {
  const newString = string.split('');
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i].match(/\w/)) {
      const charCode = getChar(newString[i], key);
      newString[i] = String.fromCharCode(charCode);
    }
  }
  return newString.join('');
};

const analyze = arr => ({
  average: arr.reduce((acc, el) => acc + el, 0) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

export {
  capitalize, reverseString, Calculator, caesar, analyze,
};
