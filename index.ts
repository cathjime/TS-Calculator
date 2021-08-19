import { question } from "readline-sync";

function aQuestion(): void {
  const anInput: string = question("Enter a number: ");
  const operator: string = question("Enter an operator: ");
  const secondInput: string = question("Enter another number: ");

  const firstNum = isInt(anInput);
  console.log(firstNum);
}

function isInt(string: string): boolean {
  const unknownType = parseInt(string);
  const isNum: boolean = !isNaN(unknownType);
  return isNum;
}

aQuestion();
