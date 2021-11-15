import isNumeric from "../utils/isNumeric";

/**
 * Transforms a number to its ordinal equivalent.
 * @param number Number to transform.
 * @returns Ordinal representation of the number.
 */
function numberToOrdinal(number: number): string {
  if (!isNumeric(number))
    throw new Error("Invalid character");

  if (Number(number) === 0)
    return '0';

  const exceptionNumbers = [11, 12, 13];
  const numberSuffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    default: 'th'
  }
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  const isException = exceptionNumbers.some((exceptionNumber) => {
    return lastTwoDigits === exceptionNumber;
  });

  if (lastDigit in numberSuffixes && !isException)
    return number + numberSuffixes[lastDigit];
  else return number + numberSuffixes.default;
}

export default numberToOrdinal;