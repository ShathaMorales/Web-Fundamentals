const display = document.querySelector("span");

let firstNumber = null;
let secondNumber = null;
let operator = null;

// Function to handle number button clicks
function press(number) {
    if (operator === null) {
        if (firstNumber === null) {
            firstNumber = number;
        } else {
            firstNumber = parseFloat(firstNumber.toString() + number.toString());
        }
        display.textContent = firstNumber;
    } else {
        if (secondNumber === null) {
            secondNumber = number;
        } else {
            secondNumber = parseFloat(secondNumber.toString() + number.toString());
        }
        display.textContent = secondNumber;
    }
}

// Function to handle operator button clicks
function setOP(op) {
    operator = op;
}

// Function to handle clear button click
function clr() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    display.textContent = " ";
}

// Function to handle equals button click
function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = null;
    }
    display.textContent = result;
    firstNumber = result;
    secondNumber = null;
    operator = null;
}

