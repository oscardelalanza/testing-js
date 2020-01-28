import { capitalize, reverseString, Calculator } from '../js';

const calculator = new Calculator(10, 2);

test('Takes a string and returns that with first character capitalized', () => {
    expect(capitalize('my string')).toBe('My string');
});

test('Takes a string and returns it reversed', () => {
    expect(reverseString('mystring')).toBe('gnirtsym');
});

test('Calculator add', ()=> {
    expect(calculator.add).toBe(12);
});

test('Calculator subtract', ()=> {
    expect(calculator.subtract).toBe(8);
});

test('Calculator divide', ()=> {
    expect(calculator.divide).toBe(5);
});

test('Calculator multiply', ()=> {
    expect(calculator.multiply).toBe(20);
});