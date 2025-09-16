import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  it("returns 0 for empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  it("returns number itself for single number", () => {
    expect(calc.add("1")).toBe(1);
  });

  it("returns sum for two numbers", () => {
    expect(calc.add("1,2")).toBe(3);
  });

  it("handles unknown amount of numbers", () => {
    expect(calc.add("1,2,3,4")).toBe(10);
  });

  it("handles new lines between numbers", () => {
    expect(calc.add("1\n2,3")).toBe(6);
  });

  it("supports custom delimiter", () => {
    expect(calc.add("//;\n1;2")).toBe(3);
  });

  it("supports multi-character delimiters", () => {
    expect(calc.add("//[***]\n1***2***3")).toBe(6);
  });

  it("supports multiple delimiters", () => {
    expect(calc.add("//[*][%]\n1*2%3")).toBe(6);
    expect(calc.add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  it("ignores numbers greater than 1000", () => {
    expect(calc.add("2,1001")).toBe(2);
  });

  it("throws on negative numbers", () => {
    expect(() => calc.add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  it("lists all negatives in exception", () => {
    expect(() => calc.add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
  });

  it("counts how many times add() was called", () => {
    calc.add("1,2");
    calc.add("3,4");
    expect(calc.getCalledCount()).toBe(2);
  });
});
