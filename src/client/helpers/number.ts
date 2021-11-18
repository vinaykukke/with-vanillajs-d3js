export default function numberToString(number: number, decimals: number = 0) {
  const stringNumber = parseFloat(number.toString())
    .toFixed(decimals)
    .replace(/(\.0+)$/, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (stringNumber === 'NaN') {
    throw new Error(`${number} is not a number`);
  }

  return stringNumber;
}