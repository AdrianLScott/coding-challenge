import calculateRPN from "./index";

describe("RPN calculation", () => {
  it("Calculation", () => {
    expect(calculateRPN("3")).toBe(3);
    expect(calculateRPN("3 4 +")).toBe(7);
    expect(calculateRPN("2 9 5 + -")).toBe(12);
    expect(calculateRPN("2 9 5 + -")).toBe(12);
  });

  it("Test invalid inputs", () => {
    expect(() => calculateRPN("5+")).toThrow("5+ is not supported");
    expect(() => calculateRPN("3 + +")).toThrow("Invalid expression");
  })
})