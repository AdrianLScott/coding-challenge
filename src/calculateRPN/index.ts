import isNumeric from "../utils/isNumeric";

const operations = {
  "+": (num1: number, num2: number) => num1 + num2,
  "-": (num1: number, num2: number) => num1 - num2,
  "*": (num1: number, num2: number) => num1 * num2,
  "/": (num1: number, num2: number) => num1 / num2
}

/**
 * This functions calculates a reverse polish notation (RPN) expression
 * @param expression RPN expression
 * @returns Result of the expression
 */
function calculateRPN(expression: string): number {
  const expressionArray: string[] = expression.split(" ");
  const stack: number[] = [];
  const expLength: number = expressionArray.length - 1;

  for (let j = 0; j <= expLength; j++) {
    const currentDigit = expressionArray[j];
    if (isNumeric(currentDigit)) {
      stack.push(Number(currentDigit))
      continue;
    }
    const lastStackValue = stack[stack.length - 1];
    const secondLastStackValue = stack[stack.length - 2];
    const calculate = operations[currentDigit];

    if (!calculate)
      throw new Error(`${currentDigit} is not supported`);

    const operationResult = calculate(lastStackValue, secondLastStackValue);

    stack.splice(stack.length - 2, 2);
    stack.push(operationResult);
  }
  if (stack.length === 1 && isNumeric(stack[0]))
    return stack[0];
  throw new Error("Invalid expression");
}

export default calculateRPN;
