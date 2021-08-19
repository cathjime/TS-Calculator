import { question } from "readline-sync";

function aQuestion(): void {
  const anInput: string = question("Enter a number: ");
  console.log(anInput);
}

aQuestion();
