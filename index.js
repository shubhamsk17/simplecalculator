var num1 = parseFloat(prompt('Enter a number:'));
var operator = prompt('Enter an operator:');
var num2 = parseFloat(prompt('Enter another number:'));

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0){
    //throw new Error
    return ("Cannot be divided by zero");
    }
    return num1 / num2;
}





function calculate(operator, num1, num2){
    switch(operator){
        case '+':
            return add (num1, num2);

        case '-':
            return subtract (num1, num2);

        case '*':
            return multiply (num1, num2);

        case '/':
            return divide (num1, num2);

        default:
            //throw new Error
            return ("Invalid operator " + operator);

    }
}

var result = calculate(operator, num1, num2);
console.log(result);
//console.log(calculate);
//console.log(`result: ${num1} ${operator} ${num2} = ${result}`);
