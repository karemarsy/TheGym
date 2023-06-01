function reverseVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strArr = str.split("");
  let start = 0;
  let end = strArr.length - 1;

  while (start < end) {
    if (!vowels.includes(strArr[start].toLowerCase())) {
      start++;
      continue;
    }

    if (!vowels.includes(strArr[end].toLowerCase())) {
      end--;
      continue;
    }

    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
  }

  return strArr.join("");
}