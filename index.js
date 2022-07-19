
// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelectorAll('[data-equals]')
// const deleteButton = document.querySelectorAll('[data-delete]')
// const allClearButton = document.querySelectorAll('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

const readlineSync = require("readline-sync")

const a = parseInt( readlineSync.question("Enter first number "));
const b = parseInt( readlineSync.question("Enter second number "));

const addSum = a + b;
const subSum = a - b;
const multSum = a * b;
const divSum = a / b;

const choice = readlineSync.question(": add, sub, mul, div ");
    if(choice.toLowerCase() == 'add') {
    console.log(a + " + " + b + " = " + addSum);

    } else if(choice.toLowerCase() == 'sub') {
    console.log(a + " - " + b + " = " + subSum);

    } else if(choice.toLowerCase() == 'mul') {
    console.log(a + " * " + b + " = " + multSum);

    } else if(choice.toLowerCase() == 'div') {
    console.log(a + " / " + b + " = " + divSum);
    
    } else {
    console.log("Not a number");
    
    };

// const result = readlineSync.result("The result is:  ")
// console.log(result)