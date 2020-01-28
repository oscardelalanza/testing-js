const capitalize = string => {
    return string[0].toUpperCase() + string.substr(1, string.length);
};

const reverseString = string => {
    return string.split('').reverse().join('');
};

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
    Calculator
};