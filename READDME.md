# String Calculator Kata (TypeScript + Jest)

A concise implementation of the [String Calculator Kata](https://kata-log.rocks/string-calculator-kata) in TypeScript, following TDD principles and using Jest for testing.

## Features

- Add numbers in a string with custom delimiters
- Supports multiple and multi-character delimiters
- Ignores numbers greater than 1000
- Throws on negative numbers (lists all negatives)

## Project Structure

```
src/
  StringCalculator.ts
  parser/
    DelimiterParser.ts
    NumberParser.ts
tests/
  StringCalculator.spec.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd string-calculator
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running Tests

Run all tests and generate a coverage report:
```sh
npm test
```

Run tests in watch mode:
```sh
npm run test:watch
```

### Code Coverage

After running `npm test`, open the HTML coverage report:
```
coverage/lcov-report/index.html
```

## Usage Example

```ts
import { StringCalculator } from "./src/StringCalculator";

const calc = new StringCalculator();
console.log(calc.add("1,2,3")); // Output: 6
console.log(calc.getCalledCount()); // Output: 1
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## Adding to Git

If you haven't initialized a git repository yet:

```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

> Inspired by the [String Calculator Kata](https://kata-log.rocks/string-calculator-kata) for practicing TDD.