import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator (TDD kata)', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  it('returns 0 for an empty string', () => {
    expect(calc.add('')).toBe(0);
  });

  it('returns the number for single number input', () => {
    expect(calc.add('1')).toBe(1);
    expect(calc.add('42')).toBe(42);
  });

  it('sums two comma-separated numbers', () => {
    expect(calc.add('1,5')).toBe(6);
    expect(calc.add('10,20')).toBe(30);
  });

  it('sums any amount of numbers', () => {
    expect(calc.add('1,2,3,4')).toBe(10);
    expect(calc.add('10,20,30')).toBe(60);
  });

  it('handles newlines between numbers along with commas', () => {
    expect(calc.add('1\n2,3')).toBe(6);
    expect(calc.add('4\n5\n6')).toBe(15);
  });

  it('supports a custom single-character delimiter', () => {
    expect(calc.add('//;\n1;2')).toBe(3);
  });

  it('supports custom multi-character delimiter using brackets', () => {
    expect(calc.add('//[***]\n1***2***3')).toBe(6);
  });

  it('supports multiple custom delimiters using brackets', () => {
    expect(calc.add('//[*][%]\n1*2%3')).toBe(6);
    expect(calc.add('//[**][%%]\n1**2%%3')).toBe(6);
  });

  it('throws when the input contains a negative number (single)', () => {
    expect(() => calc.add('-1,2,3')).toThrowError('negative numbers not allowed -1');
  });

  it('throws and lists all negative numbers in the message', () => {
    expect(() => calc.add('1,-2,-3,4')).toThrowError('negative numbers not allowed -2,-3');
  });

  it('throws for invalid non-numeric tokens', () => {
    expect(() => calc.add('1,foo,3')).toThrowError(/Invalid number token/);
  });
});
