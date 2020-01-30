import {
  capitalize, reverseString, caesar, Calculator, analyze,
} from '../js';

test('Takes a string and returns that with first character capitalized', () => {
  expect(capitalize('my string')).toBe('My string');
});

test('Takes a string and returns it reversed', () => {
  expect(reverseString('mystring')).toBe('gnirtsym');
});

test('Encodes the string using caesar cypher', () => {
  expect(
    caesar(
      `A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R,
    S, T, U, V, X, Y, Z, a, b, c, d, e, f, g, h, i, j, k,
    l, m, n, o, p, q, r, s, t, u v, x, y, z.!`, 3,
    ),
  ).toBe(
    `D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U,
    V, W, X, Y, A, B, C, d, e, f, g, h, i, j, k, l, m, n,
    o, p, q, r, s, t, u, v, w, x y, a, b, c.!`,
  );
});

test('Returns an object with average, min, max, and length of', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Calculator add', () => {
  expect(Calculator.add(4, 8)).toBe(12);
});

test('Calculator subtract', () => {
  expect(Calculator.subtract(12, 4)).toBe(8);
});

test('Calculator divide', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test('Calculator multiply', () => {
  expect(Calculator.multiply(5, 4)).toBe(20);
});
