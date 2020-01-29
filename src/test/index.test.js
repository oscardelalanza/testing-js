import { capitalize, reverseString, caesar, Calculator, analyze } from "../js";

const calculator = new Calculator(10, 2);

test("Takes a string and returns that with first character capitalized", () => {
  expect(capitalize("my string")).toBe("My string");
});

test("Takes a string and returns it reversed", () => {
  expect(reverseString("mystring")).toBe("gnirtsym");
});

test("Encodes the string using caesar cypher", () => {
  expect(
    caesar(
    `A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R,
    S, T, U, V, X, Y, Z, a, b, c, d, e, f, g, h, i, j, k,
    l, m, n, o, p, q, r, s, t, u v, x, y, z.!`
    )
  ).toBe(
    `D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U,
    V, W, X, Y, A, B, C, d, e, f, g, h, i, j, k, l, m, n,
    o, p, q, r, s, t, u, v, w, x y, a, b, c.!`
  );
});

test("Calculator add", () => {
  expect(calculator.add).toBe(12);
});

test("Calculator subtract", () => {
  expect(calculator.subtract).toBe(8);
});

test("Calculator divide", () => {
  expect(calculator.divide).toBe(5);
});

test("Calculator multiply", () => {
  expect(calculator.multiply).toBe(20);
});
