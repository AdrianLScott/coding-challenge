/**
 * Masks credit card number when number length is greater than 7
 * @param cardNumber Credit card number
 * @returns Masked card number
 */
 function maskCreditCard(cardNumber: string): string {
  const MIN_LENGTH_TO_MASK = 7;
  const SHOWN_AT_END = 4;
  const SHOWN_AT_START = 1;
  const MASKED_CHAR = 'x';

  if (cardNumber.length < MIN_LENGTH_TO_MASK) {
    return cardNumber;
  }

  const last4Digits = cardNumber.slice(-SHOWN_AT_END);
  const firstDigit = cardNumber.slice(0, SHOWN_AT_START);
  const masked = MASKED_CHAR.repeat(cardNumber.length - 5);

  return `${firstDigit}${masked}${last4Digits}`;
}

export default maskCreditCard;


