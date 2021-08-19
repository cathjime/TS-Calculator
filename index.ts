import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function letsCalculate(): void {
  const anInput: string = question("Enter a number: ");
  const operator: string = question("Enter an operator: ");
  const secondInput: string = question("Enter another number: ");
  const validInput: boolean =
    isInt(anInput) && isOperator(operator) && isInt(secondInput);

  if (validInput) {
    const num1: number = parseInt(anInput);
    const num2: number = parseInt(secondInput);
    const output = calculate(num1, num2, operator as Operator);
    console.log(output);
  } else {
    console.log("Invalid Input");
    letsCalculate();
  }
}

function isInt(string: string): boolean {
  const unknownType = parseInt(string);
  const isNum: boolean = !isNaN(unknownType);
  return isNum;
}

function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function calculate(num1: number, num2: number, operator: Operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

letsCalculate();
