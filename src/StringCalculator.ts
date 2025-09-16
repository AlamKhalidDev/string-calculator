export class StringCalculator {
  add(numbers: string): number {
    if (!numbers || numbers.trim() === '') return 0;
    throw new Error('not implemented');
  }
}
