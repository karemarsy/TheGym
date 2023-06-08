export function calculateFactorial(number) {
    return number <= 1 ? 1 : number * calculateFactorial(number - 1);
  }