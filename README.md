# Redusance

![Redusance](https://github.com/simon-debruijn/redusance/assets/66943525/f208c130-99a7-43ab-a137-6170cbf1b297)

**Redusance** - A Renaissance in Array Reduction

## Overview

Welcome to Redusance, where the art of array manipulation undergoes its own Renaissance! Inspired by the transformative era of innovation and creativity, Redusance is a modern JavaScript library designed to extend and enhance the capabilities of the traditional `reduce` function. Our aim is to provide developers with an array of ingenious, efficient, and easy-to-use reduce helpers, bringing a new level of artistry to your coding toolkit.

## Features

- **Enhanced Reduce Operations**: Discover a range of extended reduce functions like `toAvg`, `toGroups`, `toMax`, and more, each crafted to provide more power and flexibility than standard reduce methods.
- **Elegant Syntax**: Designed with the modern developer in mind, Redusance utilizes a concise and intuitive syntax, making your code more readable and maintainable.
- **High Performance**: Optimized for efficiency, our library ensures high performance even with large datasets.
- **Easy Integration**: Seamlessly integrates with your existing JavaScript projects, enhancing your development without the need for a steep learning curve.

## Getting Started

To get started with Redusance, simply install the package in your JavaScript project:

```bash
npm install redusance
```

Then, import and use our reduce helpers in your project:

```ts
import { toAvg, toGroups, toMax } from 'redusance';

// Example usage
const numbers = [1, 2, 3, 4, 5];
const average = numbers.reduce(...toAvg());
const groups = numbers.reduce(...toGroups((item: number) => item % 2 === 0 ? "even" : "odd"));
const max = numbers.reduce(...toMax());
```

## Overview reducer functions

### Common
- `toGroups` groups elements of an array into categories based on a provided grouping function.

### Numbers
- `toSum` calculates the sum of all numerical elements in an array.
- `toAvg` calculates the average (mean) of numeric elements in an array. 
- `toMedian` calculates the median of numeric elements in an array.
- `toMax` finds the maximum value in an array of numbers.

## Comparing to Lodash and others
While libraries like Lodash offer their own powerful and flexible method chaining capabilities, Redusance focuses on enhancing the native JavaScript experience. Lodash provides a comprehensive suite of utilities that extend beyond what native JavaScript offers, but it requires adherence to its own syntax and methods.

Benefits of Redusance
- **Native JavaScript Integration**: Redusance complements the existing JavaScript array methods, making it intuitive for those familiar with JavaScript.
- **Specialized Reduce Helpers**: Offers a range of tailor-made reduce helper functions that provide additional functionalities not natively present in JavaScript.
- **Minimal Dependency**: Ideal for projects aiming to reduce external dependencies while still enhancing array manipulation capabilities. Redusance has no other runtime dependencies.
- **Performance**: Optimized to work efficiently with JavaScript's native methods, potentially offering performance benefits in certain scenarios.

## Understanding the Use of Spread Syntax in Redusance

In Redusance, each helper function is designed to return two separate elements: a reducer function and an initial value. This design necessitates the use of the spread syntax (`...`) for proper integration with the `reduce` method of arrays in JavaScript.

### Returning a Reducer Function and Initial Value

Our helper functions, such as `toAvg`, are structured to return a tuple containing two elements:

1. **Callback Function**: The main logic to apply on the array.
2. **Initial Value**: The starting point for the reduce operation.

For example:

```ts
function toAvg() {
    // Returns a reducer function and an initial value
    return [callbackFunction, initialValue];
}
```

## Contributing
We welcome contributions to Redusance! If you're interested in helping improve this project, here's how you can get involved:

**Submitting Issues**: If you find a bug or have a feature request, please use the GitHub Issues page to submit them. Be as detailed as possible for bug reports, including steps to reproduce the issue.

**Submitting Pull Requests**: We're open to pull requests. If you've fixed a bug or implemented a new feature, feel free to submit a PR. Please ensure your code adheres to the existing style of the project to increase the chances of your PR being merged.

**Code Reviews**: Even if you're not contributing code, you can help by reviewing pull requests. Any feedback or suggestions are valuable and help maintain the quality of the code.

**Documentation**: Improvements or additions to documentation are always appreciated. Whether it's correcting typos, clarifying existing content, or adding new sections, your contributions make the project more accessible to everyone.

Thank you for considering contributing to Redusance. We're excited to see what you bring to the project!

## License
Redusance is open-source software licensed under the MIT License.
