import { DelimiterParser } from "./parser/DelimiterParser";
import { NumberParser } from "./parser/NumberParser";

export class StringCalculator {
  private callCount = 0;

  add(input: string): number {
    this.callCount++;

    if (!input || input.trim() === "") return 0;

    const { delimiters, numbers } = DelimiterParser.extract(input);
    const parsed = NumberParser.parse(numbers, delimiters);

    const negatives = parsed.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return parsed.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
  }

  getCalledCount(): number {
    return this.callCount;
  }
}
