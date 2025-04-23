import * as readline from 'readline';

// Task 1
const array = [2, 3, 4, 5];

let resultFor = 1;
for (let i = 0; i < array.length; i++) {
    resultFor *= array[i];
}
console.log("Product of all array elements equals to - ", resultFor);

let resultWhile = 1;
let i = 0;
while (i < array.length) {
    resultWhile *= array[i];
  i++;
}
console.log("Product of all array elements equals to - ", resultWhile);

// Task 2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
}

// Task 3
export function randArray(k: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
      const randomNum: number = Math.floor(Math.random() * 500) + 1;
      result.push(randomNum);
    }
    return result;
}

  // Task 4
  function raiseToDegree(a: number, b: number): number | string {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return "Only integers are allowed.";
    }
    return Math.pow(a, b);
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("Enter digit: ", (aInput) => {
    rl.question("Enter degree: ", (bInput) => {
      const a = parseInt(aInput);
      const b = parseInt(bInput);
      const result = raiseToDegree(a, b);
      console.log(`${a} ^ ${b} = ${result}`);
      rl.close();
    });
  });

  // Task 5
  export function findMin(...args: number[]): number | undefined {
    if (args.length === 0) return undefined;
    return Math.min(...args);
  }

  // Task 6
  export function findUnique(arr: (string | number | boolean)[]): boolean {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  }

  // Task 7
  export function lastElem<T>(arr: T[], count?: number): T | T[] | undefined {
    if (count === undefined) {
      return arr[arr.length - 1];
    }
    return arr.slice(-count);
  }

  // Task 8
  export function toUpper(str: string): string {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }