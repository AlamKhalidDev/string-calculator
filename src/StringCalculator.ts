export class StringCalculator {
  add(numbers: string): number {
    if (!numbers || numbers.length === 0) return 0;

    let delimiters: string[] = [',', '\n'];
    let payload = numbers;

    if (payload.startsWith('//')) {
      const newlineIndex = payload.indexOf('\n');
      if (newlineIndex === -1) {
        const maybeDelim = payload.slice(2);
        delimiters = [maybeDelim];
        payload = '';
      } else {
        const delimSpec = payload.slice(2, newlineIndex);
        if (delimSpec.startsWith('[') && delimSpec.includes(']')) {
          const regex = /\[([^\]]+)\]/g;
          const found: string[] = [];
          let match;
          while ((match = regex.exec(delimSpec)) !== null) {
            found.push(match[1]);
          }
          delimiters = found.length > 0 ? found : [delimSpec];
        } else {
          delimiters = [delimSpec];
        }
        payload = payload.slice(newlineIndex + 1);
      }
    }

    const escaped = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const splitRe = new RegExp(escaped.join('|'));
    const tokens = payload.split(splitRe).filter(t => t.length > 0);

    const numbersParsed = tokens.map(t => {
      const n = Number(t.trim());
      if (Number.isNaN(n)) throw new Error(`Invalid number token encountered: "${t}"`);
      return n;
    });

    const negatives = numbersParsed.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numbersParsed.reduce((acc, cur) => acc + cur, 0);
  }
}
