const capitalize = string => {
    return string[0].toUpperCase() + string.substr(1, string.length);
};

const reverseString = string => {
    return string.split('').reverse().join('');
};

const caesar = (string) => {
    string = string.split('')
    for (let i=0;i<string.length;i++) {
        if (string[i].match(/\w/)) {
            let charCode = string[i].charCodeAt(0)+3
            if (charCode > 90 && charCode < 97) {
              charCode = 65 + (charCode - 90)-1
            }
            if (charCode > 122) {
              charCode = 97 + (charCode-122)-1
            }
            string[i] = String.fromCharCode(charCode)
        }
    }
    return string.join('')
}

class Calculator {
    constructor(a, b) {
        this.add = a + b;
        this.subtract = a - b;
        this.divide = a / b;
        this.multiply = a * b;
    }
}

export {
    capitalize,
    reverseString,
    Calculator,
    caesar
};