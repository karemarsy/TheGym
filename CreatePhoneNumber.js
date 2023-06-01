function createPhoneNumber(numbers) {
  let numberStr = numbers.join("");

  let formattedNumber =
    "(" +
    numberStr.substring(0, 3) +
    ") " +
    numberStr.substring(3, 6) +
    "-" +
    numberStr.substring(6);

  return formattedNumber;
}