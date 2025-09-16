import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator (TDD kata)', () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  it('returns 0 for an empty string', () => {
    expect(calc.add('')).toBe(0);
  })
  
  it('02 - single number returns itself', () => {
  const sc = new StringCalculator();
  expect(sc.add('1')).toBe(1);
  });

});