"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function aQuestion() {
    var anInput = readline_sync_1.question("Enter a number: ");
    console.log(anInput);
}
aQuestion();
