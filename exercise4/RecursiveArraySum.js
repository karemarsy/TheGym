function recursiveArraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + recursiveArraySum(arr.slice(1));
}
