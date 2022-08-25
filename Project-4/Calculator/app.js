const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttonActive');
const purpleButtons = document.querySelectorAll('.color1');
const blueButtons = document.querySelectorAll('.color2');
const redButtons = document.querySelectorAll('.color3');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const deleteButton = document.querySelector('.deleteButton');
const decimal = document.querySelector('.decimal');

let operator = null;
let firstOperand = null;
let secondOperand = null;
let result = 0;
let displayValue = '';

for (let operand of operands) {
    operand.addEventListener('click', displayOperand);
}

for (let operator of operators) {
    operator.addEventListener('click', operate);
}

equal.addEventListener('click', displayResult);

clear.addEventListener('click', allClear);

deleteButton.addEventListener('click', deleteNumber);

decimal.addEventListener('click', addDecimal);

for (let purpleButton of purpleButtons) {
    purpleButton.addEventListener('click', function () {
        purpleButton.classList.add('color1:active');
    });
}

for (let blueButton of blueButtons) {
    blueButton.addEventListener('click', function () {
        blueButton.classList.add('color2:active');
    });
}

for (let redButton of redButtons) {
    redButton.addEventListener('click', function () {
        redButton.classList.add('color3:active');
    });
}

function displayOperand() {
    displayValue += this.textContent;
    display.textContent = displayValue.substring(0, 18);
}

function operate() {
    if (firstOperand == null) {
        firstOperand = displayValue;
        displayValue = '';
    } else {
        secondOperand = displayValue;
        displayValue = '';

        switch (operator) {
            case "+":
                result = Number(firstOperand) + Number(secondOperand);
                break;
            case "-":
                result = Number(firstOperand) - Number(secondOperand);
                break;
            case "*":
                result = Number(firstOperand) * Number(secondOperand);
                break;
            case "/":
                result = Number(firstOperand) / Number(secondOperand);
                break;
        }
        firstOperand = result;
        display.textContent = result;
    }
    operator = this.textContent;
}

function displayResult() {
    secondOperand = displayValue;
    displayValue = '';
    switch (operator) {
        case "+":
            result = Number(firstOperand) + Number(secondOperand);
            break;
        case "-":
            result = Number(firstOperand) - Number(secondOperand);
            break;
        case "*":
            result = Number(firstOperand) * Number(secondOperand);
            break;
        case "/":
            result = Number(firstOperand) / Number(secondOperand);
            break;
    }
    display.textContent = result;
    firstOperand = '';
}

function allClear() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    displayValue = '';
}

function deleteNumber() {
    if (display.textContent.length == 1) {
        display.textContent = '0';
    }
    if (display.textContent != '0') {
        if (display.textContent.length > 1) {
            display.textContent = display.textContent.slice(0, -1);
        }
    }
    displayValue = display.textContent;
}

function addDecimal() {
    // Display only one decimal point
    if (display.textContent.indexOf(".") < 0) {
        displayValue += this.textContent;
        display.textContent = displayValue;
    }
}