const readline = require("readline-sync")
console.log(add(3, 4))

const a = parseInt(rl.question('Please enter your first number '));
const b = parseInt(rl.question('Please enter the second number '));

const addSum = a + b;
const subSum = a - b;
const multSum = a * b;
const divSum = a / b;

const choice = rl.question("What would you like to do with these numbers? Please pick one: add, subtract, multiply, or divide. ");
    if(choice.toLowerCase == 'add') {
    console.log(a + " + " + b + " = " + addSum);

    } else if(choice.toLowerCase == 'subtract') {
    console.log(a + " - " + b + " = " + subSum);

    } else if(choice.toLowerCase == 'multiply') {
    console.log(a + " * " + b + " = " + multSum);

    } else if(choice.toLowerCase == 'divide') {
    console.log(a + " / " + b + " = " + divSum);
    
    } else {
    console.log('I think you might have made a typo');
    
    };