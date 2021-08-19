"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function aQuestion() {
    var anInput = readline_sync_1.question("Enter a number: ");
    var operator = readline_sync_1.question("Enter an operator: ");
    var secondInput = readline_sync_1.question("Enter another number: ");
    var firstNum = isInt(anInput);
    console.log(firstNum);
}
function isInt(string) {
    var unknownType = parseInt(string);
    var isNum = !isNaN(unknownType);
    return isNum;
}
aQuestion();
