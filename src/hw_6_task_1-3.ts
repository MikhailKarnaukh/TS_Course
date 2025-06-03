// Task 1
export function display(text: string): void;
export function display(t1: string, t2: string): void;
export function display(arr: string[]): void;

export function display(arg1: string | string[], arg2?: string): void {
  if (Array.isArray(arg1)) {
    arg1.forEach(line => console.log(line));
  } else if (typeof arg2 === "string") {
    console.log(arg1);
    console.log(arg2);
  } else {
    console.log(arg1);
  }
}

// Task 2
export function identity<T extends { rating: number }>(arr: T[]): number {
  if (arr.length === 0) return 0;

  const total = arr.reduce((sum, item) => sum + item.rating, 0);
  return total / arr.length;
}

// Task 3
export function withEmploymentDate<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    employmentDate = '2024-04-12';
  };
}

@withEmploymentDate
export class Manager {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    console.log('Initializing the Manager class');
  }
}