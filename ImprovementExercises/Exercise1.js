const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  return (
    numbers.reduce((sum, currentNumber) => sum + currentNumber, 0) /
    numbers.length
  );
};
