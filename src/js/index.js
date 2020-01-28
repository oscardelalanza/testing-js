const capitalize = string => {
    return string[0].toUpperCase() + string.substr(1, string.length);
};

const reverseString = string => {
    return string.split('').reverse().join('');
};

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    }
};

export {
    capitalize,
    reverseString,
    calculator
};