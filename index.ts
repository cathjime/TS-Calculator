import { question } from "readline-sync";

function aQuestion(): void {
  const anInput: string = question("Enter a number: ");
  const operator: string = question("Enter an operator: ");
  const secondInput: string = question("Enter another number: ");

  const op = isOperator(operator);
  console.log(op);
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

aQuestion();
