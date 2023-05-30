function createPhoneNumber(numbers){
  var numberStr = numbers.join('');

  var formattedNumber = '(' + numberStr.substring(0, 3) + ') ' + numberStr.substring(3, 6) + '-' + numberStr.substring(6);
  
  return formattedNumber;
}