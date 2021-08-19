"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function letsCalculate() {
    var anInput = readline_sync_1.question("Enter a number: ");
    var operator = readline_sync_1.question("Enter an operator: ");
    var secondInput = readline_sync_1.question("Enter another number: ");
    var validInput = isInt(anInput) && isOperator(operator) && isInt(secondInput);
    if (validInput) {
        var num1 = parseInt(anInput);
        var num2 = parseInt(secondInput);
        var output = calculate(num1, num2, operator);
        console.log(output);
    }
    else {
        console.log("Invalid Input");
        letsCalculate();
    }
}
function isInt(string) {
    var unknownType = parseInt(string);
    var isNum = !isNaN(unknownType);
    return isNum;
}
function isOperator(operator) {
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
function calculate(num1, num2, operator) {
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
