export class NumberParser {
  static parse(numbers: string, delimiters: string[]): number[] {
    if (!numbers.trim()) return [];

    const escaped = delimiters.map(d =>
      d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const splitter = new RegExp(escaped.join("|"));
    const tokens = numbers.split(splitter).filter(t => t.length > 0);

    return tokens.map(t => parseInt(t.trim(), 10));
  }
}
