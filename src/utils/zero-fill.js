function zeroFill(number, targetLength) {
  while (number.toString().length < targetLength) {
    number = '0' + number
  }
  return number
}

export default zeroFill
