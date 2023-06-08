export function multiply(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}
