export class DelimiterParser {
  static defaultDelimiters = [",", "\n"];

  static extract(input: string): { delimiters: string[]; numbers: string } {
    if (!input.startsWith("//")) {
      return { delimiters: this.defaultDelimiters, numbers: input };
    }

    const [header, numbers] = input.split("\n", 2);

    if (!header) {
      return { delimiters: this.defaultDelimiters, numbers: "" };
    }

    const customSpec = header.slice(2);

    if (customSpec.startsWith("[") && customSpec.includes("]")) {
      //This will support multi character delimiters: //[***][%%]
      const regex = /\[([^\]]+)\]/g;
      const delimiters: string[] = [];
      let match;
      while ((match = regex.exec(customSpec)) !== null) {
        delimiters.push(match[1]);
      }
      return { delimiters, numbers };
    }

    return { delimiters: [customSpec], numbers };
  }
}
