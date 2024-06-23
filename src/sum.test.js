import sum from "./sum";

test("testing for sum funciton", () => {
  let a = 10;
  let b = 10;
  let output = 20;
  expect(sum(a, b)).toBe(output);
});
